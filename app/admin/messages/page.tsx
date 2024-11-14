"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Filter,
  Search,
  ChevronLeft,
  ChevronRight,
  Mail,
  CheckCircle2,
  User,
} from "lucide-react";
import { format } from "date-fns";

// Mock data - Replace with actual API calls
const mockMessages = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `Sender ${i + 1}`,
  email: `sender${i + 1}@example.com`,
  message: `This is a sample message ${
    i + 1
  }. It contains some content that would be displayed in the preview. The full message would be much longer and contain more detailed information about the sender's inquiry or request.`,
  date: new Date(2024, 3, i + 1).toISOString(),
  isRead: i % 3 === 0,
}));

const ITEMS_PER_PAGE = 10;

export default function AdminMessages() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMessage, setSelectedMessage] = useState<
    (typeof mockMessages)[0] | null
  >(null);

  const filteredMessages = mockMessages.filter((message) => {
    const matchesSearch =
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "read" ? message.isRead : !message.isRead);
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredMessages.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedMessages = filteredMessages.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const markAsRead = (messageId: number) => {
    // In a real application, this would be an API call
    const messageIndex = mockMessages.findIndex((m) => m.id === messageId);
    if (messageIndex !== -1) {
      mockMessages[messageIndex].isRead = true;
      setSelectedMessage({ ...mockMessages[messageIndex] });
    }
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Message Management</h1>
          <p className="text-muted-foreground">
            View and manage contact form messages
          </p>
        </motion.div>

        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-4">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[150px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Messages</SelectItem>
                <SelectItem value="read">Read</SelectItem>
                <SelectItem value="unread">Unread</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="bg-card rounded-lg border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>Sender</TableHead>
                <TableHead>Message Preview</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedMessages.map((message) => (
                <TableRow key={message.id}>
                  <TableCell>
                    <Badge
                      variant={message.isRead ? "secondary" : "default"}
                      className="w-fit"
                    >
                      {message.isRead ? (
                        <CheckCircle2 className="w-4 h-4 mr-1" />
                      ) : (
                        <Mail className="w-4 h-4 mr-1" />
                      )}
                      {message.isRead ? "Read" : "Unread"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{message.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {message.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-sm text-muted-foreground truncate max-w-[300px]">
                      {message.message}
                    </p>
                  </TableCell>
                  <TableCell>
                    {format(new Date(message.date), "MMM d, yyyy")}
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedMessage(message)}
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>Message Details</DialogTitle>
                        </DialogHeader>
                        {selectedMessage && (
                          <div className="space-y-4">
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4 text-muted-foreground" />
                              <div>
                                <div className="font-medium">
                                  {selectedMessage.name}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {selectedMessage.email}
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground mb-1">
                                Received on{" "}
                                {format(
                                  new Date(selectedMessage.date),
                                  "MMMM d, yyyy 'at' h:mm a"
                                )}
                              </div>
                              <p className="text-sm whitespace-pre-wrap">
                                {selectedMessage.message}
                              </p>
                            </div>
                            {!selectedMessage.isRead && (
                              <div className="flex justify-end">
                                <Button
                                  onClick={() => markAsRead(selectedMessage.id)}
                                  className="w-full"
                                >
                                  Mark as Read
                                </Button>
                              </div>
                            )}
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex items-center justify-between px-4 py-4 border-t">
            <div className="text-sm text-muted-foreground">
              Showing {startIndex + 1} to{" "}
              {Math.min(startIndex + ITEMS_PER_PAGE, filteredMessages.length)}{" "}
              of {filteredMessages.length} entries
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                )
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
