import { Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

export default function RegisComponent() {
  return (
    <div className="h-72 relative bg-cover object-contain" style={{backgroundImage: "url(https://iili.io/HQCnoGa.png)"}}>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
        <h2 className="text-white text-5xl font-bold mb-10 text-center">
          Registrasi
        </h2>
        <div className="bg-white min-w-max h-full py-5 mx-4 rounded-xl">
          <form className="flex flex-col gap-4 px-24 md:px-5 border-0">
            <div className="">
              <TextInput
                placeholder="Nama Perusahaan"
                required
                shadow
                style={{ borderWidth: "0px" }}
                type="text"
              />
            </div>
            <div>
              <TextInput placeholder="Email" required shadow type="email" style={{ borderWidth: "0px" }}/>
            </div>
            <div>
              <TextInput
                placeholder="Nomor Telepon"
                maxLength={12}
                required
                shadow
                style={{ borderWidth: "0px" }}
                type="number"
              />
              <span className="text-sm text-gray-400">isi hanya angka</span>
            </div>
            <div>
              <Textarea
                id="comment"
                placeholder="Tentang Perusahaan [Max 200 character]"
                required
                style={{ borderWidth: "0px" }}
                rows={4}
              />
            </div>
            <div className="flex gap-5">
              <div className="w-52 h-32 bg-gray-100 flex justify-center items-center rounded-lg shadow-md">
                <label
                  htmlFor="files"
                  className="flex justify-center items-center"
                >
                  <BsFillPlusCircleFill className="text-[#007CBD] h-8 w-8 cursor-pointer" />
                </label>
                <TextInput required type="file" id="files" className="hidden" style={{ borderWidth: "0px" }} />
              </div>
              <div>
                <ol className="list-decimal pl-4 pt-2 pb-4">
                  <li className="text-sm">Format file: .png.jpg.jpeg</li>
                  <li className="text-sm">Maksimal ukuran file 200KB</li>
                  <li className="text-sm">
                    Hindari penggunaan logo berwarna putih
                  </li>
                  <li className="text-sm">Minimal lebar 300px</li>
                </ol>
              </div>
            </div>
            <div>
              <div className="flex">
                <TextInput
                  placeholder="Profile Perusahaan atau Deck (opsional)"
                  required
                  shadow
                  type="text"
                  style={{ borderWidth: "0px" }}
                  className="w-full"
                />
                <div className="bg-[#007CBD] rounded-lg h-11 px-10 cursor-pointer">
                  <div className="py-3">
                    <label htmlFor="upload">
                      <p className="text-white font-semibold text-sm cursor-pointer">
                        Uploadfile
                      </p>
                    </label>
                  </div>
                </div>
                <TextInput
                  required
                  type="file"
                  id="upload"
                  className="hidden"
                />
              </div>
              <span className="text-sm text-gray-400">
                Format file pdf maksimal size 20mb
              </span>
            </div>
            <div>
              <TextInput
                placeholder="Link website"
                maxLength={12}
                required
                shadow
                style={{ borderWidth: "0px" }}
                type="text"
              />
              <span className="text-sm text-gray-400">
                Website, Sosial media, dll. Sertakan protokol URL (http:// atau https://)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="agree" className="bg-gray-300" style={{ borderWidth: "0px" }}/>
              <Label className="flex " htmlFor="agree" >
                <p className="text-[12px]">
                  Dengan menekan "Daftar", daya menyetujui syarat dan ketentuan
                  yang berlaku
                </p>
              </Label>
            </div>
            <div className="flex justify-center my-8">
              <button
                type="submit"
                className="bg-[#007CBD] w-1/2 py-[10px] rounded-[5px] text-white font-semibold"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
