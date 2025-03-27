import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1F1F1F] text-white">
      <h1 className="text-6xl font-extrabold text-[#E55615]">404</h1>
      <h2 className="text-2xl font-semibold mt-4">
        Oops! Halaman Tidak Ditemukan
      </h2>
      <p className="text-gray-400 mt-2 text-center max-w-md">
        Halaman yang Anda cari mungkin telah dihapus, namanya diubah, atau tidak
        pernah ada.
      </p>
      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-[#E55615] text-white rounded-md text-lg font-semibold hover:bg-[#C54512] cursor-pointer transition duration-300">
          Kembali ke Beranda
        </button>
      </Link>
    </div>
  );
}
