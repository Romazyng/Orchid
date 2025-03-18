import Image from "next/image";

interface UserProfileProps {
  user: any;
}

export default function UserProfile({ user }: UserProfileProps) {
  const avatarUrl = user?.user_metadata?.avatar_url;

  return (
    <div className="flex items-center gap-2">
      {avatarUrl && (
        <Image
          src={avatarUrl}
          alt="User Avatar"
          width={45}
          height={45}
          className="rounded-full"
        />
      )}
    </div>
  );
}