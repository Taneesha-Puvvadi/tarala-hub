import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { useLocation } from "wouter";

export default function AdminDashboard() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<"worksheets" | "videos" | "games" | "files">("worksheets");
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);

  // Redirect if not admin
  if (user?.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>You do not have permission to access this page.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => setLocation("/")} className="w-full">
              Go Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-blue-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage educational content</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("worksheets")}
            className={`px-4 py-2 font-semibold border-b-2 transition-colors ${
              activeTab === "worksheets"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            📚 Worksheets
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-4 py-2 font-semibold border-b-2 transition-colors ${
              activeTab === "videos"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            🎥 Videos
          </button>
          <button
            onClick={() => setActiveTab("games")}
            className={`px-4 py-2 font-semibold border-b-2 transition-colors ${
              activeTab === "games"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            🎮 Games
          </button>
          <button
            onClick={() => setActiveTab("files")}
            className={`px-4 py-2 font-semibold border-b-2 transition-colors ${
              activeTab === "files"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            📁 Files
          </button>
        </div>

        {/* Worksheets Tab */}
        {activeTab === "worksheets" && <WorksheetsTab onUploadOpen={() => setUploadDialogOpen(true)} />}

        {/* Videos Tab */}
        {activeTab === "videos" && <VideosTab onUploadOpen={() => setUploadDialogOpen(true)} />}

        {/* Games Tab */}
        {activeTab === "games" && <GamesTab onUploadOpen={() => setUploadDialogOpen(true)} />}

        {/* Files Tab */}
        {activeTab === "files" && <FilesTab />}
      </div>

      {/* Upload Dialog */}
      <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload File</DialogTitle>
            <DialogDescription>Upload a new educational resource to S3 storage.</DialogDescription>
          </DialogHeader>
          <FileUploadForm onSuccess={() => setUploadDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

function WorksheetsTab({ onUploadOpen }: { onUploadOpen: () => void }) {
  const { data: worksheets, isLoading } = trpc.worksheets.list.useQuery();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Worksheets</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">+ Add Worksheet</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Worksheet</DialogTitle>
            </DialogHeader>
            <AddWorksheetForm />
          </DialogContent>
        </Dialog>
      </div>

      {isLoading ? (
        <div className="text-center py-8">Loading worksheets...</div>
      ) : !worksheets || worksheets.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center text-gray-500">
            No worksheets yet. Create one to get started!
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {worksheets.map((worksheet: any) => (
            <Card key={worksheet.id}>
              <CardHeader>
                <CardTitle>{worksheet.title}</CardTitle>
                <CardDescription>{worksheet.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Subject:</span> {worksheet.subject}
                  </div>
                  <div>
                    <span className="font-semibold">Grade:</span> {worksheet.grade}
                  </div>
                  <div>
                    <span className="font-semibold">Difficulty:</span> {worksheet.difficulty}
                  </div>
                  <div>
                    <span className="font-semibold">Status:</span>{" "}
                    {worksheet.isPublished ? "Published" : "Draft"}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function VideosTab({ onUploadOpen }: { onUploadOpen: () => void }) {
  const { data: videos, isLoading } = trpc.videos.list.useQuery();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Videos</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">+ Add Video</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Video</DialogTitle>
            </DialogHeader>
            <AddVideoForm />
          </DialogContent>
        </Dialog>
      </div>

      {isLoading ? (
        <div className="text-center py-8">Loading videos...</div>
      ) : !videos || videos.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center text-gray-500">
            No videos yet. Add one to get started!
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {videos.map((video: any) => (
            <Card key={video.id}>
              <CardHeader>
                <CardTitle>{video.title}</CardTitle>
                <CardDescription>{video.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Subject:</span> {video.subject}
                  </div>
                  <div>
                    <span className="font-semibold">Grade:</span> {video.grade}
                  </div>
                  <div>
                    <span className="font-semibold">Type:</span> {video.videoType}
                  </div>
                  <div>
                    <span className="font-semibold">Status:</span>{" "}
                    {video.isPublished ? "Published" : "Draft"}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function GamesTab({ onUploadOpen }: { onUploadOpen: () => void }) {
  const { data: games, isLoading } = trpc.games.list.useQuery();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Games</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">+ Add Game</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Game</DialogTitle>
            </DialogHeader>
            <AddGameForm />
          </DialogContent>
        </Dialog>
      </div>

      {isLoading ? (
        <div className="text-center py-8">Loading games...</div>
      ) : !games || games.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center text-gray-500">
            No games yet. Add one to get started!
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {games.map((game: any) => (
            <Card key={game.id}>
              <CardHeader>
                <CardTitle>{game.title}</CardTitle>
                <CardDescription>{game.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Subject:</span> {game.subject}
                  </div>
                  <div>
                    <span className="font-semibold">Grade:</span> {game.grade}
                  </div>
                  <div>
                    <span className="font-semibold">Type:</span> {game.gameType}
                  </div>
                  <div>
                    <span className="font-semibold">Status:</span>{" "}
                    {game.isPublished ? "Published" : "Draft"}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function FilesTab() {
  const { data: files, isLoading } = trpc.files.list.useQuery();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Files</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">+ Upload File</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upload File</DialogTitle>
            </DialogHeader>
            <FileUploadForm />
          </DialogContent>
        </Dialog>
      </div>

      {isLoading ? (
        <div className="text-center py-8">Loading files...</div>
      ) : !files || files.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center text-gray-500">
            No files uploaded yet.
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {files.map((file: any) => (
            <Card key={file.id}>
              <CardHeader>
                <CardTitle>{file.fileName}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Type:</span> {file.fileType}
                  </div>
                  <div>
                    <span className="font-semibold">Size:</span> {(file.fileSize / 1024).toFixed(2)} KB
                  </div>
                  <div>
                    <span className="font-semibold">Downloads:</span> {file.downloadCount}
                  </div>
                  <div>
                    <a href={file.fileUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function AddWorksheetForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subject: "German" as const,
    grade: 2,
    difficulty: "Easy" as const,
    fileUrl: "",
    fileKey: "",
    fileName: "",
  });

  const createMutation = trpc.worksheets.create.useMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createMutation.mutate(formData as any);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>Title</Label>
        <Input
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>
      <div>
        <Label>Description</Label>
        <Textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Subject</Label>
          <Select
            value={formData.subject}
            onValueChange={(value: any) => setFormData({ ...formData, subject: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="German">German</SelectItem>
              <SelectItem value="Maths">Maths</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Grade</Label>
          <Select
            value={String(formData.grade)}
            onValueChange={(value) => setFormData({ ...formData, grade: parseInt(value) })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2">Grade 2</SelectItem>
              <SelectItem value="3">Grade 3</SelectItem>
              <SelectItem value="4">Grade 4</SelectItem>
              <SelectItem value="5">Grade 5</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label>Difficulty</Label>
        <Select
          value={formData.difficulty}
          onValueChange={(value: any) => setFormData({ ...formData, difficulty: value })}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Easy">Easy</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Hard">Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full" disabled={createMutation.isPending}>
        {createMutation.isPending ? "Creating..." : "Create Worksheet"}
      </Button>
    </form>
  );
}

function AddVideoForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subject: "German" as const,
    grade: 2,
    difficulty: "Easy" as const,
    videoType: "youtube" as const,
    videoUrl: "",
    youtubeId: "",
    durationSeconds: 0,
  });

  const createMutation = trpc.videos.create.useMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createMutation.mutate(formData as any);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>Title</Label>
        <Input
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>
      <div>
        <Label>Description</Label>
        <Textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Subject</Label>
          <Select
            value={formData.subject}
            onValueChange={(value: any) => setFormData({ ...formData, subject: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="German">German</SelectItem>
              <SelectItem value="Maths">Maths</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Grade</Label>
          <Select
            value={String(formData.grade)}
            onValueChange={(value) => setFormData({ ...formData, grade: parseInt(value) })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2">Grade 2</SelectItem>
              <SelectItem value="3">Grade 3</SelectItem>
              <SelectItem value="4">Grade 4</SelectItem>
              <SelectItem value="5">Grade 5</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label>Video Type</Label>
        <Select
          value={formData.videoType}
          onValueChange={(value: any) => setFormData({ ...formData, videoType: value })}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="youtube">YouTube</SelectItem>
            <SelectItem value="s3">S3 Storage</SelectItem>
            <SelectItem value="external">External Link</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Video URL</Label>
        <Input
          value={formData.videoUrl}
          onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={createMutation.isPending}>
        {createMutation.isPending ? "Creating..." : "Create Video"}
      </Button>
    </form>
  );
}

function AddGameForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subject: "German" as const,
    grade: 2,
    gameType: "vocabulary_match" as const,
    difficulty: "Easy" as const,
    gameUrl: "",
  });

  const createMutation = trpc.games.create.useMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createMutation.mutate(formData as any);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>Title</Label>
        <Input
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>
      <div>
        <Label>Description</Label>
        <Textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Subject</Label>
          <Select
            value={formData.subject}
            onValueChange={(value: any) => setFormData({ ...formData, subject: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="German">German</SelectItem>
              <SelectItem value="Maths">Maths</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Grade</Label>
          <Select
            value={String(formData.grade)}
            onValueChange={(value) => setFormData({ ...formData, grade: parseInt(value) })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2">Grade 2</SelectItem>
              <SelectItem value="3">Grade 3</SelectItem>
              <SelectItem value="4">Grade 4</SelectItem>
              <SelectItem value="5">Grade 5</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label>Game Type</Label>
        <Select
          value={formData.gameType}
          onValueChange={(value: any) => setFormData({ ...formData, gameType: value })}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="vocabulary_match">Vocabulary Match</SelectItem>
            <SelectItem value="spelling_bee">Spelling Bee</SelectItem>
            <SelectItem value="hangman">Hangman</SelectItem>
            <SelectItem value="quiz">Quiz</SelectItem>
            <SelectItem value="mental_math">Mental Math</SelectItem>
            <SelectItem value="puzzle">Puzzle</SelectItem>
            <SelectItem value="race">Race</SelectItem>
            <SelectItem value="fraction_master">Fraction Master</SelectItem>
            <SelectItem value="geometry">Geometry</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full" disabled={createMutation.isPending}>
        {createMutation.isPending ? "Creating..." : "Create Game"}
      </Button>
    </form>
  );
}

function FileUploadForm({ onSuccess }: { onSuccess?: () => void } = {}) {
  const [formData, setFormData] = useState({
    fileName: "",
    fileType: "worksheet" as const,
    mimeType: "application/pdf",
    fileData: "",
  });

  const uploadMutation = trpc.files.upload.useMutation({
    onSuccess: () => {
      onSuccess?.();
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFormData({
      ...formData,
      fileName: file.name,
      mimeType: file.type,
    });

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      setFormData((prev) => ({ ...prev, fileData: base64.split(",")[1] }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    uploadMutation.mutate(formData as any);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>File Type</Label>
        <Select
          value={formData.fileType}
          onValueChange={(value: any) => setFormData({ ...formData, fileType: value })}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="worksheet">Worksheet</SelectItem>
            <SelectItem value="image">Image</SelectItem>
            <SelectItem value="video">Video</SelectItem>
            <SelectItem value="document">Document</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Select File</Label>
        <Input type="file" onChange={handleFileChange} required />
      </div>
      <Button type="submit" className="w-full" disabled={uploadMutation.isPending || !formData.fileData}>
        {uploadMutation.isPending ? "Uploading..." : "Upload File"}
      </Button>
    </form>
  );
}

