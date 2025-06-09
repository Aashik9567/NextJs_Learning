import Image from 'next/image';
import wondersImages, { WonderImage } from "@/app/photo-feed/wonder";
import Modal from "@/app/components/modal";
import { notFound } from 'next/navigation';

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage | undefined = wondersImages.find((p) => p.id === id);

  // If photo is not found, return a 404 page
  if (!photo) {
    notFound();
  }

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}