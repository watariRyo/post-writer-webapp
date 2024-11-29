import Editor from '@/components/editor';
import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/session';
import { Post, User } from '@prisma/client';
import { notFound, redirect } from 'next/navigation';

async function getPostForUser(postId: Post['id'], userId: User['id']) {
  const post = await db.post.findFirst({
    where: {
      id: postId,
      authorId: userId,
    },
  });

  return post;
}

interface EditorProps {
  params: { postId: string };
}

export default async function EditorPage({ params }: EditorProps) {
  const postId = params.postId;
  const user = await getCurrentUser();
  if (!user) {
    redirect('/login');
  }
  const userId = user.id;

  const post = await getPostForUser(postId, userId);

  if (!post) {
    notFound();
  } else {
    return (
      <Editor
        post={{
          id: post.id,
          title: post.title,
          content: post.content,
          published: post.published,
        }}
      />
    );
  }
}
