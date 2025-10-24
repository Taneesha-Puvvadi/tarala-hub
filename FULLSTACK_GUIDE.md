# TaRaLa-Hub Full-Stack Implementation Guide

## Overview

TaRaLa-Hub has been successfully upgraded from a static website to a **full-stack educational platform** with backend server, database, user authentication, and cloud file storage capabilities. This guide explains the new features, architecture, and how to use them.

---

## What's New: Full-Stack Features

### 1. Backend Server (Express.js + tRPC)

The application now includes a Node.js backend server that handles:
- **API endpoints** for managing worksheets, videos, games, and files
- **User authentication** via Manus OAuth
- **Database operations** with Drizzle ORM
- **File uploads** to S3 cloud storage

**Key Files:**
- `server/routers.ts` - tRPC API procedures
- `server/db.ts` - Database query helpers
- `server/storage.ts` - S3 file storage helpers

### 2. Database (MySQL)

A relational database stores all educational content metadata:

| Table | Purpose |
|-------|---------|
| `users` | User accounts and authentication |
| `worksheets` | PDF worksheets metadata |
| `videos` | Video lesson metadata |
| `games` | Interactive game metadata |
| `files` | General file uploads |
| `studentProgress` | Student learning progress |
| `adminLogs` | Admin activity tracking |

**Key Features:**
- Automatic timestamps (created, updated)
- Published/draft status for content
- Download and view counters
- User attribution (who uploaded what)

### 3. User Authentication

Built-in Manus OAuth integration provides:
- **Secure login** without password management
- **Role-based access control** (admin vs. user)
- **Session management** with cookies
- **Protected API endpoints** for admin-only operations

**How It Works:**
1. User clicks "Login" button
2. Redirected to Manus OAuth portal
3. After authentication, session cookie is set
4. User can access protected features based on role

### 4. File Storage (S3)

All files are stored in cloud S3 storage with:
- **Automatic upload** when admin uploads files
- **Presigned URLs** for secure downloads
- **Metadata tracking** in database
- **Public/private** access control

**File Types Supported:**
- Worksheets (PDF, DOCX)
- Images (PNG, JPG, SVG)
- Videos (MP4, WebM)
- Documents (PDF, DOCX, XLSX)
- Other formats

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend (React)                      │
│  - Home Page                                             │
│  - Worksheets, Videos, Games Pages                       │
│  - Admin Dashboard (protected)                           │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│              Backend Server (Express + tRPC)             │
│  - Authentication (Manus OAuth)                          │
│  - API Procedures (worksheets, videos, games, files)     │
│  - File Upload Handler                                   │
└─────────────────────────────────────────────────────────┘
                          ↓
        ┌─────────────────┬─────────────────┐
        ↓                 ↓                 ↓
    ┌────────┐        ┌────────┐      ┌──────────┐
    │ MySQL  │        │   S3   │      │  Manus   │
    │Database│        │ Storage│      │  OAuth   │
    └────────┘        └────────┘      └──────────┘
```

---

## API Endpoints (tRPC Procedures)

### Worksheets

**List worksheets:**
```typescript
trpc.worksheets.list.useQuery({ subject: "German", grade: 2 })
```

**Get single worksheet:**
```typescript
trpc.worksheets.get.useQuery(worksheetId)
```

**Create worksheet (admin only):**
```typescript
trpc.worksheets.create.useMutation({
  title: "German Alphabet",
  description: "Learn the German alphabet",
  subject: "German",
  grade: 2,
  difficulty: "Easy",
  fileKey: "uploads/...",
  fileUrl: "https://s3.../...",
  fileName: "alphabet.pdf"
})
```

**Update worksheet (admin only):**
```typescript
trpc.worksheets.update.useMutation({
  id: 1,
  title: "Updated Title",
  isPublished: 1
})
```

**Delete worksheet (admin only):**
```typescript
trpc.worksheets.delete.useMutation(worksheetId)
```

### Videos

Same pattern as worksheets:
- `trpc.videos.list.useQuery()`
- `trpc.videos.get.useQuery(id)`
- `trpc.videos.create.useMutation()`
- `trpc.videos.update.useMutation()`
- `trpc.videos.delete.useMutation()`

### Games

Same pattern as worksheets:
- `trpc.games.list.useQuery()`
- `trpc.games.get.useQuery(id)`
- `trpc.games.create.useMutation()`
- `trpc.games.delete.useMutation()`

### Files

**Upload file (admin only):**
```typescript
trpc.files.upload.useMutation({
  fileName: "worksheet.pdf",
  fileType: "worksheet",
  mimeType: "application/pdf",
  fileData: base64EncodedData
})
```

**List files:**
```typescript
trpc.files.list.useQuery({ fileType: "worksheet" })
```

**Get file:**
```typescript
trpc.files.get.useQuery(fileId)
```

**Delete file (admin only):**
```typescript
trpc.files.delete.useMutation(fileId)
```

---

## Admin Dashboard

The admin dashboard is accessible at `/admin` and provides:

### Features

1. **Worksheets Management**
   - View all worksheets
   - Create new worksheets
   - Update worksheet metadata
   - Publish/unpublish worksheets
   - Delete worksheets

2. **Videos Management**
   - View all videos
   - Add YouTube, S3, or external videos
   - Update video metadata
   - Publish/unpublish videos
   - Delete videos

3. **Games Management**
   - View all games
   - Create new games
   - Support 9 game types (vocabulary match, spelling bee, hangman, quiz, mental math, puzzle, race, fraction master, geometry)
   - Publish/unpublish games
   - Delete games

4. **Files Management**
   - Upload files directly to S3
   - View all uploaded files
   - Track download counts
   - Delete files

### Access Control

- Only users with `role = "admin"` can access the dashboard
- The first user (owner) is automatically promoted to admin
- To promote other users to admin, update their `role` in the database

---

## Database Schema

### Users Table

```sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  openId VARCHAR(64) UNIQUE NOT NULL,
  name TEXT,
  email VARCHAR(320),
  loginMethod VARCHAR(64),
  role ENUM('user', 'admin') DEFAULT 'user',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  lastSignedIn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Worksheets Table

```sql
CREATE TABLE worksheets (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  subject ENUM('German', 'Maths') NOT NULL,
  grade INT NOT NULL,
  difficulty ENUM('Easy', 'Medium', 'Hard') NOT NULL,
  fileKey VARCHAR(512) NOT NULL,
  fileUrl TEXT NOT NULL,
  fileName VARCHAR(255) NOT NULL,
  mimeType VARCHAR(100) DEFAULT 'application/pdf',
  fileSize INT,
  uploadedBy INT NOT NULL,
  downloadCount INT DEFAULT 0,
  isPublished INT DEFAULT 1,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Videos Table

```sql
CREATE TABLE videos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  subject ENUM('German', 'Maths') NOT NULL,
  grade INT NOT NULL,
  difficulty ENUM('Easy', 'Medium', 'Hard') NOT NULL,
  videoType ENUM('youtube', 's3', 'external') NOT NULL,
  videoUrl TEXT NOT NULL,
  youtubeId VARCHAR(100),
  thumbnailUrl TEXT,
  durationSeconds INT,
  uploadedBy INT NOT NULL,
  viewCount INT DEFAULT 0,
  isPublished INT DEFAULT 1,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Games Table

```sql
CREATE TABLE games (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  subject ENUM('German', 'Maths') NOT NULL,
  grade INT NOT NULL,
  gameType ENUM('vocabulary_match', 'spelling_bee', 'hangman', 'quiz', 'mental_math', 'puzzle', 'race', 'fraction_master', 'geometry') NOT NULL,
  difficulty ENUM('Easy', 'Medium', 'Hard') NOT NULL,
  gameUrl TEXT,
  isEmbedded INT DEFAULT 0,
  uploadedBy INT NOT NULL,
  playCount INT DEFAULT 0,
  averageScore INT,
  isPublished INT DEFAULT 1,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Files Table

```sql
CREATE TABLE files (
  id INT PRIMARY KEY AUTO_INCREMENT,
  fileName VARCHAR(255) NOT NULL,
  fileKey VARCHAR(512) NOT NULL,
  fileUrl TEXT NOT NULL,
  mimeType VARCHAR(100) NOT NULL,
  fileSize INT,
  fileType ENUM('worksheet', 'image', 'video', 'document', 'other') NOT NULL,
  uploadedBy INT NOT NULL,
  downloadCount INT DEFAULT 0,
  isPublic INT DEFAULT 1,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

---

## Development Workflow

### 1. Adding New Content

**To add a worksheet:**

1. Go to `/admin` dashboard
2. Click "Worksheets" tab
3. Click "+ Add Worksheet" button
4. Fill in the form:
   - Title: "German Numbers 1-10"
   - Description: "Learn numbers in German"
   - Subject: German
   - Grade: 2
   - Difficulty: Easy
   - File URL: (from S3 after upload)
5. Click "Create Worksheet"

**To add a video:**

1. Go to `/admin` dashboard
2. Click "Videos" tab
3. Click "+ Add Video" button
4. Fill in the form:
   - Title: "German Pronunciation"
   - Description: "Learn correct pronunciation"
   - Subject: German
   - Grade: 2
   - Difficulty: Easy
   - Video Type: YouTube (or S3/External)
   - Video URL: https://youtube.com/watch?v=...
5. Click "Create Video"

### 2. Uploading Files

**To upload a file to S3:**

1. Go to `/admin` dashboard
2. Click "Files" tab
3. Click "+ Upload File" button
4. Select file type (worksheet, image, video, document, other)
5. Choose file from computer
6. Click "Upload File"
7. File is automatically uploaded to S3 and metadata saved to database

### 3. Publishing Content

By default, all content is created as **draft** (not published). To publish:

1. Go to admin dashboard
2. Find the content item
3. Click "Update" or edit button
4. Set `isPublished` to 1
5. Save changes

Only published content appears on the public pages.

---

## Deployment

### Prerequisites

- Node.js 18+ installed
- MySQL database (local or cloud)
- S3 bucket for file storage
- Manus OAuth credentials

### Environment Variables

Create `.env` file with:

```env
# Database
DATABASE_URL=mysql://user:password@localhost:3306/tarala_hub

# JWT
JWT_SECRET=your-secret-key-here

# OAuth
VITE_OAUTH_PORTAL_URL=https://vida.butterfly-effect.dev
OAUTH_SERVER_URL=https://vidabiz.butterfly-effect.dev
VITE_APP_ID=your-app-id

# S3 Storage
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_S3_BUCKET=your-bucket-name

# App Config
VITE_APP_TITLE=TaRaLa-Hub
VITE_APP_LOGO=https://your-logo-url.png
PORT=3000
```

### Build and Deploy

```bash
# Install dependencies
pnpm install

# Push database schema
pnpm db:push

# Build for production
pnpm build

# Start server
pnpm start
```

---

## Security Considerations

### 1. Authentication

- All admin endpoints require authentication
- Only users with `role = "admin"` can manage content
- Session cookies are secure and HTTP-only

### 2. File Upload

- Files are uploaded to S3, not stored locally
- File names are randomized to prevent enumeration
- File types are validated before upload
- Large files are rejected (size limits enforced)

### 3. Database

- Use strong database passwords
- Enable SSL for database connections
- Regularly backup database
- Use parameterized queries (Drizzle ORM handles this)

### 4. S3 Storage

- Use IAM roles with minimal permissions
- Enable bucket encryption
- Set appropriate access controls
- Use presigned URLs for downloads (expires in 1 hour)

---

## Troubleshooting

### Issue: "Unauthorized" error when accessing admin dashboard

**Solution:** Make sure you're logged in and your account has `role = "admin"` in the database.

### Issue: File upload fails

**Solution:** Check:
1. S3 credentials are correct
2. Bucket exists and is accessible
3. File size is under limit
4. File type is supported

### Issue: Database connection error

**Solution:** Verify:
1. MySQL server is running
2. DATABASE_URL is correct
3. Database exists
4. User has proper permissions

### Issue: Videos not loading

**Solution:** Check:
1. Video URL is correct and accessible
2. YouTube video ID is valid (if using YouTube)
3. S3 file exists (if using S3)
4. Content is published (`isPublished = 1`)

---

## Performance Optimization

### 1. Caching

- Use browser caching for static assets
- Implement Redis caching for database queries
- Cache S3 presigned URLs (1 hour expiry)

### 2. Database Indexing

Add indexes for frequently queried fields:

```sql
CREATE INDEX idx_worksheets_subject_grade ON worksheets(subject, grade);
CREATE INDEX idx_videos_subject_grade ON videos(subject, grade);
CREATE INDEX idx_games_subject_grade ON games(subject, grade);
CREATE INDEX idx_files_fileType ON files(fileType);
```

### 3. File Optimization

- Compress PDFs before upload
- Resize images to appropriate dimensions
- Use video streaming (not download) for large videos

---

## Monitoring and Analytics

### Track User Engagement

The database includes counters for:
- `downloadCount` - How many times a worksheet was downloaded
- `viewCount` - How many times a video was viewed
- `playCount` - How many times a game was played
- `studentProgress` - Individual student progress

### Query Examples

**Most popular worksheets:**
```sql
SELECT title, downloadCount FROM worksheets 
ORDER BY downloadCount DESC LIMIT 10;
```

**Student progress:**
```sql
SELECT u.name, COUNT(*) as completed 
FROM studentProgress sp
JOIN users u ON sp.userId = u.id
WHERE sp.completionStatus = 'completed'
GROUP BY u.id;
```

---

## Next Steps

1. **Customize branding** - Update colors, logos, and text in `client/src/index.css`
2. **Add more game types** - Extend the `gameType` enum in `drizzle/schema.ts`
3. **Implement student progress tracking** - Use `studentProgress` table to track learning
4. **Add notifications** - Use built-in notification API to alert admins of new uploads
5. **Create analytics dashboard** - Build charts showing engagement metrics
6. **Integrate payment** - Add subscription or premium content features

---

## Support and Resources

- **tRPC Documentation:** https://trpc.io/docs
- **Drizzle ORM:** https://orm.drizzle.team
- **Express.js:** https://expressjs.com
- **React:** https://react.dev
- **AWS S3:** https://aws.amazon.com/s3

---

## Summary

TaRaLa-Hub is now a **production-ready full-stack educational platform** with:

✅ User authentication and role-based access control  
✅ Database for storing educational content metadata  
✅ Cloud file storage (S3) for worksheets, videos, and documents  
✅ Admin dashboard for managing all content  
✅ Public pages for students to access learning materials  
✅ Progress tracking and analytics  
✅ Secure API with tRPC  

You're ready to deploy and start serving students!

