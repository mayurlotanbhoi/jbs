import React from "react";
import { useParams } from "react-router-dom";
import { useGetEventPostQuery } from "../../../../services/events.service";
import { FiUser } from "react-icons/fi";

const EventPosts = () => {
    const { eventId } = useParams();
    const { data: event, error, isLoading } = useGetEventPostQuery(eventId);

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6">
            {/* Loading State */}
            {isLoading && (
                <div className="space-y-4">
                    <div className="animate-pulse bg-gray-300 h-8 w-3/4 rounded-md" />
                    <div className="animate-pulse bg-gray-300 h-6 w-full rounded-md" />
                    <div className="animate-pulse bg-gray-300 h-4 w-1/2 rounded-md" />
                </div>
            )}

            {/* Error State */}
            {error && <p className="text-red-500 text-center">Failed to load event details.</p>}

            {/* Event Details */}
            {event && (
                <div className="border border-gray-300 shadow-md rounded-lg p-5 bg-white">
                    <h2 className="text-2xl font-bold text-gray-900">{event?.data?.heading}</h2>
                    <p className="text-gray-500 text-sm mt-1">{new Date(event?.data?.date).toDateString()}</p>
                    <p className="text-gray-700 mt-3">{event?.data?.description}</p>
                </div>
            )}

            {/* Posts Section */}
            <h3 className="text-lg font-semibold text-gray-800 mt-6">Posts</h3>
            {event?.data?.posts.length > 0 ? (
                <div className="space-y-4">
                    {event?.data?.posts.map((post) => (
                        <div key={post._id} className="border border-gray-200 shadow-sm rounded-md p-4 bg-white flex items-start gap-3">
                            <div className="p-2 bg-gray-100 rounded-full">
                                <FiUser className="text-gray-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-gray-800">
                                    <strong className="text-blue-600">{post.userId.name}:</strong> {post.comment}
                                </p>
                                <p className="text-xs text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 text-center">No posts yet.</p>
            )}
        </div>
    );
};

export default EventPosts;
