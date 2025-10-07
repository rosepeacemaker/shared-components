import React from 'react'
import { Card, CardContent } from "@/components/ui/card"; // Assuming shadcn/ui Card is installed

interface VideoCardProps {
  videoSrc: string; // e.g., '/videos/sample.mp4' or YouTube embed URL
  thumbnail?: string; // Optional poster image
  title?: string;
}



export default function VideoCard({ videoSrc, thumbnail, title }: VideoCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-0">
        {/* Video Player */}
        <video
          className="w-full h-48 object-cover"
          src={videoSrc}
          poster={thumbnail}
          controls
          onMouseEnter={(e) => e.currentTarget.play()} // Auto-play on hover
          onMouseLeave={(e) => e.currentTarget.pause()} // Pause on leave
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
        
        {/* Optional Title */}
        {title && (
          <div className="p-4">
            <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
  
