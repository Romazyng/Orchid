import Image from "next/image";

interface UserProfileProps {
  user: any;
}

export default function UserProfile({ user }: UserProfileProps) {
  const avatarUrl = user?.user_metadata?.avatar_url;
  const userName = user?.user_metadata?.name || 'Guest';
  const fallbackAvatar = '/default-avatar.png';

  return (
    <div className="flex items-center gap-2">
      <Image
        src={avatarUrl || fallbackAvatar}
        alt="User Avatar"
        width={45}
        height={45}
        className="rounded-full"
      />
    </div>
  );
}
