"use client";
import React, { useState, useEffect } from "react";

//Next.js
import Image from "next/image";

//Shadcn
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

//Icons
import { PiLockLaminated, PiBookOpenThin, PiBarcode } from "react-icons/pi";
import { MdLogout } from "react-icons/md";

//Images
import bibliotekkort from "@/public/bibliotekkort.png";
import logo from "@/public/Siktlogo.png";

//Functions
function getFormattedDate() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} kl. ${hours}:${minutes} (CET)`;
}

export default function Component() {
  const [isActive, setIsActive] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState(1);

  const handleClick = () => {
    setIsActive(true);
    setButtonOpacity(0.7); // Set button opacity to 50% when clicked
    setTimeout(() => {
      setIsActive(false);
      setButtonOpacity(1); // Restore button opacity after 4 seconds
    }, 4000);
  };

  const openFullscreen = () => {
    const elem = document.documentElement as HTMLElement;

    const requestFullscreen =
      elem.requestFullscreen ||
      (elem as any).webkitRequestFullscreen ||
      (elem as any).msRequestFullscreen;

    if (requestFullscreen) {
      requestFullscreen.call(elem).catch((err: Error) => {
        console.error("Error attempting to enable fullscreen:", err);
      });
    }
  };

  useEffect(() => {
    openFullscreen();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-white text-gray-900">
      {/* App Header */}
      <header className="flex justify-between items-center px-6 pb-4 pt-6 bg-[#EBE6FD] border-b-2 border-[#7251FA]">
        <div className="flex items-center space-x-2">
          <AlertDialog>
            <AlertDialogTrigger>
              <Image src={logo} alt="Barcode" width={90} />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <Popover>
          <PopoverTrigger>
            <div className="flex flex-col items-center space-y-1 px-4">
              <div className="border h-1 w-1 rounded-full border-[#7251FA]"></div>
              <div className="border h-1 w-1 rounded-full border-[#7251FA]"></div>
              <div className="border h-1 w-1 rounded-full border-[#7251FA]"></div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="border-[#7251FA] border-2 mt-1 mr-4 max-w-44 rounded-xl px-4 py-3">
            <ul>
              <li className="border-b border-gray-300 p-2 flex items-center justify-between">
                <Popover>
                  <PopoverTrigger className=" flex items-center justify-between w-full">
                    Bibliotekkort <PiBarcode size={20} />
                  </PopoverTrigger>
                  <PopoverContent className="w-[382px] mr-4 -mt-14 rounded-xl border-[#7251FA] border-2 space-y-4">
                    <Image src={bibliotekkort} alt="Barcode" width={480} />
                    <p className="text-sm w-full text-center">
                      <span className="font-semibold">Studiested: </span>
                      Høgskulen på Vestlandet
                    </p>

                    <button className="w-full bg-[#7251FA] text-white py-3 rounded-full text-lg transition-opacity duration-300">
                      Lukk
                    </button>
                  </PopoverContent>
                </Popover>
              </li>
              <li className="border-b border-gray-300 p-2 flex items-center justify-between">
                <Popover>
                  <PopoverTrigger className=" flex items-center justify-between w-full">
                    Vilkår <PiBookOpenThin size={20} />
                  </PopoverTrigger>
                  <PopoverContent className="w-[382px] mx-4 -mt-24 rounded-xl border-[#7251FA] border-2 space-y-4">
                    <span className="text-xl">Vilkår</span>
                    <p className="text-sm w-full">
                      Appen vil vise informasjon om navn, studiested og om du
                      har betalt semesteravgift og semesterregistrert deg. Appen
                      vil også vise bilde av deg, som institusjonen har tatt til
                      bruk for studentkort. Appen fungerer som studentbevis
                      blant annet hos studentsamskipnader og
                      kollevktivtransportselskper i Norge. Hvis appen ikke viser
                      bilde av deg, må du ta med gyldig legitimasjon med bilde.
                      <br />
                      <br />
                      Ved førstegangsbruk må appen være koblet til internett for
                      å kunne laste ned informasjon. Informasjonen blir lagret
                      lokalt på telefonen og du trenger ikke være online for å
                      bruke appen.
                      <br />
                      <br />
                      Skulle telefonnen gå tom for strøm eller av andre grunner
                      ikke fungere, må du bevise studentstatus med
                      semesterkvittering og gyldig legitimasjon.
                      <br />
                      <br />
                      Institusjonen tar ikke ansvar for bøter, misbruk og
                      lignende.
                      <br />
                      <a href="#" className="underline text-blue-500">
                        Les mer om digitalt studentbevis.
                      </a>
                    </p>

                    <button className="w-full bg-[#7251FA] text-white py-3 rounded-full text-lg transition-opacity duration-300">
                      Lukk
                    </button>
                  </PopoverContent>
                </Popover>
              </li>
              <a href="https://sikt.no/studentbevis-pa-mobil/personvernerklaering">
                <li className="border-b border-gray-300 p-2 flex items-center justify-between">
                  Personvern <PiLockLaminated size={20} />
                </li>
              </a>

              <li className="border-b border-gray-300 p-2 flex items-center justify-between text-red-500">
                Logg ut <MdLogout size={20} />
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 space-y-5">
        <div className="flex-1 flex flex-col sm:flex-row items-center w-full space-y-5 sm:space-y-0 sm:space-x-5">
          <div className="w-full flex flex-col  space-y-5 items-center">
            {/* Profile Section */}
            <div className="flex flex-col items-center ">
              <Image
                src="https://github.com/shadcn.png"
                alt="Profile picture"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>

            {/* Personal Info */}
            <div className="bg-[#EBE6FD] rounded-xl p-4 space-y-2 border-2 border-[#7251FA] w-full">
              <h2 className="text-lg">Haakon-Andre Breyholtz-Mott (20)</h2>
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
                <p className="text-sm">
                  <span className="font-semibold">Fødselsdato: </span>
                  05.07.2004
                </p>
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
                <p className="text-sm">
                  <span className="font-semibold">Studentnummer: </span>586527
                </p>
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
                <p className="text-sm">
                  <span className="font-semibold">Studiested: </span>Høgskulen
                  på Vestlandet
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-5 w-full">
            {/* Valid Student ID */}
            <div
              className={`rounded-xl p-4 text-center border-2 transition-colors duration-500 ease-in-out w-full ${
                isActive ? "animate-control" : "bg-[#BAF8E3] border-[#2C6552]"
              }`}
            >
              <h3 className="text-xl mb-2">Gyldig studentbevis</h3>
              <p className="text-sm">Høst 2024</p>
              <p className="text-sm">
                <span className="font-semibold">Utløper: </span>31.01.2025
              </p>
            </div>

            {/* Control Button */}
            <button
              className="w-full bg-[#7251FA] text-white py-3 rounded-full text-lg transition-opacity duration-300"
              onClick={handleClick}
              style={{ opacity: buttonOpacity }}
            >
              Kontroll
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex flex-col items-center space-y-4 p-4 text-center text-xs text-black">
          <p>Sist oppdatert: {getFormattedDate()}</p>
          <p>Versjon: 4.0.3</p>
        </footer>
      </main>
    </div>
  );
}
