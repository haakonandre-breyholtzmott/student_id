import { MoreVertical } from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex flex-col h-screen bg-gray-100 text-gray-900">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-white">
        <span className="text-lg font-semibold">20:51</span>
        <div className="flex items-center space-x-1">
          <div className="w-4 h-4 bg-black rounded-sm"></div>
          <div className="w-4 h-4 bg-black rounded-sm"></div>
          <div className="w-4 h-4 bg-black rounded-sm relative">
            <div className="absolute inset-0.5 bg-white rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* App Header */}
      <header className="flex justify-between items-center px-4 py-2 bg-white border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-indigo-900 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <span className="text-2xl font-bold">Sikt</span>
        </div>
        <MoreVertical className="text-indigo-600" />
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <Image
            src="/placeholder.svg"
            alt="Profile picture"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        {/* Personal Info */}
        <div className="bg-indigo-100 rounded-lg p-4 space-y-2">
          <h2 className="text-xl font-semibold">Hans-Eirik Breyholtz-Mott (24)</h2>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <span>Fødselsdato: 20.07.2000</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span>Studentnummer: 586527</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            <span>Studiested: Høgskulen på Vestlandet</span>
          </div>
        </div>

        {/* Valid Student ID */}
        <div className="bg-green-100 rounded-lg p-4 text-center">
          <h3 className="text-xl font-semibold mb-2">Gyldig studentbevis</h3>
          <p>Høst 2024</p>
          <p>Utløper: 31.01.2025</p>
        </div>

        {/* Control Button */}
        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold">
          Kontroll
        </button>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-sm text-gray-500">
        <p>Sist oppdatert: 14.09.2024 kl. 18:21 (CET)</p>
        <p>Versjon: 4.0.3</p>
      </footer>
    </div>
  )
}
