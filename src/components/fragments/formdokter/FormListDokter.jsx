import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { createChat } from "@/services/chat.config";
import { getAllUsers } from "@/services/users.config";
import { getAllTransaksi } from "@/services/transaksi.config";
import { useAuth } from "../../../context/AuthContext";

export default function FormListDokter() {
  const [doctors, setDoctors] = useState([]);
  const [isPremium, setIsPremium] = useState(false);
  const navigate = useNavigate();
  const { userData } = useAuth();

  // Fetch data dokter
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await getAllUsers();
        const dokterData = response.data.filter((user) => user.role.id === 3);
        setDoctors(dokterData);
      } catch (error) {
        console.error("Gagal mengambil data dokter:", error.message);
        Swal.fire("Error!", "Gagal memuat data dokter.", "error");
      }
    };

    fetchDoctors();
  }, []);

  // Cek langganan dengan memfilter hasil dari getAllTransaksi
  useEffect(() => {
    const checkSubscription = async () => {
      try {
        const allTransactions = await getAllTransaksi();

        // Filter transaksi untuk pengguna saat ini
        const userTransactions = allTransactions.filter(
          (trx) =>
            trx.user.id === userData.id && // Transaksi milik user saat ini
            trx.status.id === 2 && // Status APPROVED
            new Date(trx.end_date) > new Date() // Belum kadaluwarsa
        );

        setIsPremium(userTransactions.length > 0); // Set status premium
      } catch (error) {
        setIsPremium(false); // Jika gagal, anggap pengguna bukan premium
      }
    };

    if (userData) {
      checkSubscription();
    }
  }, [userData]);

  const handleConsultation = async (doctorId) => {
    try {
      const session = await createChat({ id_user: userData.id, id_doctor: doctorId });
      navigate(`/chat/${session.session.id}`);
    } catch (error) {
      console.error("Gagal memulai konsultasi:", error.message);
      Swal.fire("Error!", "Gagal memulai konsultasi.", "error");
    }
  };

  return (
    <div className="space-y-6">
      {doctors.length === 0 ? (
        <p className="text-center text-gray-500">Tidak ada data dokter tersedia.</p>
      ) : (
        doctors.map((doctor) => (
          <div key={doctor.id} className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm overflow-hidden transition-transform transform hover:scale-105">
            <img src={doctor.images || "/placeholder-image.png"} alt={`Foto dari ${doctor.name}`} className="w-32 h-32 object-cover rounded-lg shadow-md" />
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-bold text-gray-900">{doctor.name}</h3>
              <p className="text-sm text-gray-700">{doctor.jenis_profesi || "Dokter Spesialis"}</p>
              <div className="mt-4">
                {isPremium ? (
                  <button className="bg-primary hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full text-sm shadow-md" onClick={() => handleConsultation(doctor.id)}>
                    Konsultasi
                  </button>
                ) : (
                  <p className="text-red-500 text-sm font-semibold">Hanya untuk anggota yang berlangganan premium</p>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
