import axios from "axios";
import { Select, Spin } from "antd";
import { Context } from "../context/Context";
import React, { useContext, useEffect, useState } from "react";
import ImgCard from "../components/ImgCard";
import Navbar from "../components/Navbar";
import { instance } from "../hook/instance";
import { API_REQUEST } from "../hook/useEnv";
import { useNavigate } from "react-router-dom";
import { XFilled } from "@ant-design/icons";
import { XIcon } from "../assets/icon/Icon";

const Price = () => {
  const navigate = useNavigate();
  const { saveDocument } = useContext(Context);
  const { token, setSaveDocument } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);

  const [pnfl, setPnfl] = useState(null); // Pnfl
  const [pnflName, setPnflName] = useState(""); // Pnfl
  const [innData, setInnData] = useState(""); // INN
  const [inn, setInn] = useState(null); // INN

  const [kadastr, setKadastr] = useState(""); // Kaadastr
  const [kadastrData, setKadastrData] = useState(null); // Kaadastr

  const [firsImg, setFirstImg] = useState(null); // img
  const [imgList, setImgList] = useState([]); // img
  const [imgCount, setImgCount] = useState([]); // img
  const [selectedImages, setSelectedImages] = useState([]);

  const [typeOfHousing, setTypeOfHousing] = useState([]); // House Type
  const [ownership, setOwnerShip] = useState(null); // House Owner Type
  const [displayText, setDisplayText] = useState("Mavjud");
  const [around, setAround] = useState([]); // house Around

  const [legalEntity, setLegalEntity] = useState(false); // owner
  const [individual, setIndividual] = useState(false); // owner

  const [propertyType, setPropertyType] = useState(false); // property

  const [sustain, setSustain] = useState(null); // sustain

  // House Function and List
  const HouseTypesList = [
    {
      label: "Biznes",
      value: "bisnes",
    },
    {
      label: "Kvartira",
      value: "kvartira",
    },
    {
      label: "Hovli",
      value: "hovli",
    },
  ];
  function handleChangeHouseType(value) {
    setTypeOfHousing(value);
    if (value == "bisnes") {
      setPropertyType(true);
    } else if (value == "kvartira" || value == "hovli") {
      setPropertyType(false);
    }
  }
  useEffect(() => {
    if (typeOfHousing === "hovli") {
      setDisplayText("Hovlida Mavjud");
    } else if (typeOfHousing === "kvartira") {
      setDisplayText("Kvartirada Mavjud");
    } else if (typeOfHousing === "bisnes") {
      setDisplayText("Mavjud");
    } else if (typeOfHousing === "Ofis") {
      setDisplayText("Ofisda Mavjud");
    } else if (typeOfHousing === "Do'kon") {
      setDisplayText("Do'konda Mavjud");
    } else if (typeOfHousing === "Noturar(Komerskiy)") {
      setDisplayText("Ofisda Mavjud");
    }
  }, [typeOfHousing]);

  // Around Function and List
  const aroundListList = [
    {
      label: "Kasalxona",
      value: "Kasalxona",
    },
    {
      label: "Poliklinika",
      value: "poliklinika",
    },
    {
      label: "Bolalar maydonchasi",
      value: "Bolalar maydonchasi",
    },
    {
      label: "Bolalar bogʻchasi",
      value: "Bolalar bogʻchasi",
    },
    {
      label: "Bekatlar",
      value: "Bekatlar",
    },
    {
      label: "Park",
      value: "Park",
    },
    {
      label: "Yashil zona",
      value: "yashil zona",
    },
    {
      label: "Koʻngilochar muassasalar",
      value: "Koʻngilochar muassasalar",
    },
    {
      label: "Restoran",
      value: "Restoran",
    },
    {
      label: "Kafelar",
      value: "kafelar",
    },
    {
      label: "Turargoh",
      value: "turargoh",
    },
    {
      label: "Supermarket",
      value: "Supermarket",
    },
    {
      label: "Doʻkonlar",
      value: "doʻkonlar",
    },
    {
      label: "Maktab",
      value: "Maktab",
    },
  ];
  function handleChangeAround(value) {
    setAround(value);
  }
  // Around Function and List

  // ownerChange Function and List
  const onChange = (value) => {
    setOwnerShip(value);
    if (value == "jismoniy") {
      setIndividual(true);
      setLegalEntity(false);
    } else if (value == "yuridik") {
      setLegalEntity(true);
      setIndividual(false);
    }
  };
  // ownerChange Function and List
  // PNFL change Function and List
  function handlePNFLChange(e) {
    setInn("");
    setPnfl(e.target.value);
    if (e.target.value.length > 13) {
      instance()
        .get(`/user/oneid/person/${e.target.value}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            // "ngrok-skip-browser-warning": "true"
          },
        })
        .then((res) => {
          setPnflName(res.data.full_name);
        });
    } else {
      setPnflName(null);
    }
  }
  // PNFL change Function and List

  // Inn change Function and List

  function handleInnChange(e) {
    setPnfl("");
    setInn(e.target.value);
    if (e.target.value.length > 8) {
      instance()
        .get(`/user/oneid/company/${e.target.value}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            // "ngrok-skip-browser-warning": "true"
          },
        })
        .then((res) => {
          setInnData(res.data.company_name);
        });
    } else {
      setInnData(null);
    }
  }
  // Inn change Function and List

  // Kadastr change Function and List
  function handleKadastrChange(e) {
    setKadastr(e.target.value);
    if (e.target.value.length > 12) {
      instance()
        .get(`/user/oneid/house/${e.target.value}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            // "ngrok-skip-browser-warning": "true"
          },
        })
        .then((res) => {
          setKadastrData(res.data);
        });
    } else {
      setKadastrData(null);
    }
  }
  // Kadastr change Function and List

  // image function
  function handleImgChange(e) {
    setFirstImg(URL.createObjectURL(e.target.files[0]));
    setSelectedImages((prevState) => [
      ...prevState,
      URL.createObjectURL(e.target.files[0]),
    ]);
    setImgList((last) => [...last, e.target.files[0]]);
    setImgCount((last) => [...last, "img"]);
  }

  function handleRemoveImage(index) {
    const images = selectedImages.filter((item, idx) => idx !== index);
    const newImgList = imgList.filter((item, idx) => idx !== index);
    setImgList(newImgList);
    setSelectedImages(images);
  }
  // image function

  // sustain function
  const sustainList = [
    {
      label: "A'lo",
      value: "A'lo",
    },
    {
      label: "Yaxshi",
      value: "Yaxshi",
    },
    {
      label: "O'rtacha",
      value: "O'rtacha",
    },
    {
      label: "Qoniqarsiz",
      value: "Qoniqarsiz",
    },
  ];
  function handleChangeSustain(value) {
    setSustain(value);
  }
  // sustain function

  function handleChangeObject(value) {
    console.log(value);
  }
  // post request
  function handlePriceSubmit(e) {
    e.preventDefault();
    setSaveDocument(false);
    setIsLoading(true);
    const formData = new FormData();
    formData.append("cadastre_no", kadastr);
    around.forEach((area) => {
      formData.append("nearby_areas", area);
      console.log("Nearby area:", area);
    });
    imgList.forEach((image) => {
      formData.append("images", image);
    });
    formData.append("ownership", ownership);
    formData.append("pinfl", pnfl);
    formData.append("inn", inn ? inn : null);
    formData.append("estate_type", typeOfHousing);
    setTimeout(() => {
      axios
        .post(`${API_REQUEST}/properties/real-estate/`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const id = res.data.id;
          navigate(`/price/home-price/${id}`);
        })
        .catch((error) => {
          console.log(error.response);
        });
      setIsLoading(false);
    }, 1000);
  }

  // post request
  return (
    <>
      <div className="flex">
        <div className="w-[22%] h-[92.8vh]">
          {" "}
          <Navbar />{" "}
        </div>
        <div className="w-[78%] pl-[64px] border-l-[1px] border-[#D3D3D3] pt-[32px] h-[100vh] space-y-auto">
          <h1 className="font-semibold text-[32px] leading-[38.73px] mb-[43px]">
            Ko’chmas mulkma’lumotlari
          </h1>
          <form
            onSubmit={handlePriceSubmit}
            className="mt-[44px] h-[85vh] overflow-y-auto"
            autoComplete="off"
            encType="multipart/form-data"
          >
            <label className="w-[672px] flex items-center justify-between mb-[18px]">
              <span className="font-light text-[15px] leading-[18.2px] text-[#202020]">
                Mulk turi
              </span>
              <Select
                size="large"
                className="w-[500px] rounded-[12px] bg-transparent outline-none border-[1px] border-[#DCDCDC] text-[#898989]"
                showSearch
                placeholder="Malumot qoldiring..."
                onChange={handleChangeHouseType}
                options={HouseTypesList}
              />
            </label>
            {propertyType && (
              <div className="ml-[150px] mb-[20px]">
                <Select
                  size="large"
                  className="w-[500px] rounded-[12px] bg-transparent outline-none border-[1px] border-[#DCDCDC] text-[#898989]"
                  placeholder="Kiriting !"
                  onChange={handleChangeHouseType}
                  options={[
                    {
                      value: "Ofis",
                      label: "Ofis",
                    },
                    {
                      value: "Do'kon",
                      label: "Do'kon",
                    },
                    {
                      value: "Noturar(Komerskiy)",
                      label: "Noturar(Komerskiy)",
                    },
                  ]}
                />
              </div>
            )}
            <label className="w-[672px] flex items-center justify-between mb-[18px]">
              <span className="font-light text-[15px] leading-[18.2px] text-[#202020]">
                Mulk egasi
              </span>
              <Select
                size="large"
                className="w-[500px] rounded-[12px] bg-transparent outline-none border-[1px] border-[#DCDCDC] text-[#898989]"
                showSearch
                placeholder="Malumot qoldiring..."
                onChange={onChange}
                options={[
                  {
                    value: "jismoniy",
                    label: "Jismoniy shahs",
                  },
                  {
                    value: "yuridik",
                    label: "Yuridik shahs",
                  },
                ]}
              />
            </label>
            {individual ? (
              <div className="flex flex-col gap-[24px] mb-[42px] ml-[160px]">
                <input
                  onChange={handlePNFLChange}
                  name="PNFL"
                  className="w-[226px] bg-white py-[17px] font-regular text-[14px] leading-[16.94px] text-black px-[10px] rounded-[12px] outline-none border-[1px] border-[#DCDCDC] placeholder:text-black"
                  placeholder="PINFL"
                />
                {pnflName && (
                  <p className="w-[498px] py-[24px] rounded-[15px] border-[1px] border-[#DCDCDC] pl-[15px] pr-[5px] cursor-not-allowed font-regular text-[14px] leading-[17px]">
                    <span className="font-bold">F.I.SH: </span>
                    {pnflName}
                  </p>
                )}
              </div>
            ) : (
              ""
            )}
            {legalEntity ? (
              <div className="w-[500px] mb-[20px] flex items-center justify-between ml-[160px]">
                <input
                  onChange={handleInnChange}
                  name="INN"
                  className="w-full bg-white py-[17px] font-regular text-[14px] leading-[16.94px] text-black px-[10px] rounded-[12px] outline-none border-[1px] border-[#DCDCDC] placeholder:text-black"
                  placeholder="INN"
                />
              </div>
            ) : (
              ""
            )}
            {innData && (
              <p className="w-[498px] ml-[160px] mb-[20px] py-[24px] rounded-[15px] border-[1px] border-[#DCDCDC] pl-[15px] pr-[5px] cursor-not-allowed font-regular text-[14px] leading-[17px]">
                <span className="font-bold">Tashkilot nomi: </span>
                {innData}
              </p>
            )}
            <label className="w-[662px] flex items-start justify-between mb-[18px]">
              <span className="font-light text-[14px] leading-[18.2px] text-[#202020]">
                Kadastr number
              </span>
              <div className="flex flex-col gap-[10px]">
                <input
                  minLength={12}
                  onChange={handleKadastrChange}
                  name="Kadastr"
                  required
                  className="w-[500px] py-[10px] pl-[6px] pr-[4px] rounded-[12px] bg-transparent outline-none border-[1px] border-[#DCDCDC]"
                  type="text"
                  placeholder="Iltimos kadastr raqam kiriting"
                  aria-label="Your kadastr Number"
                />
                {kadastrData && (
                  <div className="w-[500px] py-[24px] rounded-[15px] border-[1px] border-[#DCDCDC] pl-[15px] pr-[2px] cursor-not-allowed font-regular text-[14px] leading-[17px] flex flex-col gap-[10px]">
                    <div className="flex items-center gap-[10px]">
                      <span className="font-bold">Uy Manzili:</span>
                      <p className="w-[375px]">{kadastrData.region}</p>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <span className="font-bold">Obyekt maydoni:</span>
                      <p>{kadastrData.area}m kv</p>
                    </div>
                  </div>
                )}
              </div>
            </label>
            <label className="w-[672px] flex items-center justify-between mb-[18px]">
              <span className="font-light text-[15px] leading-[18.2px] text-[#202020]">
                Mulk Holati
              </span>
              <Select
                required
                size="large"
                className="w-[500px] rounded-[12px] bg-transparent outline-none border-[1px] border-[#DCDCDC] text-[#898989]"
                showSearch
                placeholder="Malumot qoldiring..."
                onChange={handleChangeSustain}
                options={sustainList}
              />
            </label>
            <label className="w-[672px] flex items-center justify-between mb-[18px]">
              <span className="font-light text-[15px] leading-[18.2px] text-[#202020]">
                Mulkning atrofida
              </span>
              <Select
                mode="tags"
                size="large"
                className="w-[500px] rounded-[12px] bg-transparent outline-none border-[1px] border-[#DCDCDC] text-[#898989]"
                placeholder="Malumot qoldiring..."
                onChange={handleChangeAround}
                options={aroundListList}
              />
            </label>
            <label className="w-[672px] flex items-center justify-between mb-[18px]">
              <span className="font-light text-[15px] leading-[18.2px] text-[#202020]">
                {displayText}
              </span>
              <Select
                mode="tags"
                size="large"
                className="w-[500px] rounded-[12px] bg-transparent outline-none border-[1px] border-[#DCDCDC] text-[#898989]"
                showSearch
                placeholder="Malumot qoldiring..."
                onChange={handleChangeObject}
                options={[
                  {
                    value: "Internet",
                    label: "internet",
                  },
                  {
                    value: "Telefon",
                    label: "telefon",
                  },
                  {
                    value: "Kabelli TV",
                    label: "kabelliTV",
                  },
                  {
                    value: "Oshxona",
                    label: "oshxona",
                  },
                  {
                    value: "Balkon",
                    label: "balkon",
                  },
                ]}
              />
            </label>
            <div className="w-[922px] mt-5 relative flex justify-between">
              <p className="font-light text-[15px] leading-[18.2px] text-[#202020]">
                Rasim yuklash
              </p>
              <div className="w-[753px] flex flex-wrap gap-[22px]">
                {selectedImages.map((item, index) => (
                  <div className="w-[162px] h-[150px] relative" key={item}>
                    <XIcon
                      className="absolute -top-2 -right-2 cursor-pointer"
                      onClick={handleRemoveImage.bind(null, index)}
                    />
                    <img
                      src={item}
                      alt={item}
                      className="object-fill w-full h-full rounded-lg"
                    />
                  </div>
                ))}

                {selectedImages.length < 8 && (
                  <label className="w-[162px] PriceImgInput overflow-hidden h-[150px] rounded-[8px] bg-[#49a3fd] duration-300 relative">
                    <div>
                      <input
                        className="hidden"
                        onChange={handleImgChange}
                        type="file"
                        accept="image/*"
                      />
                      <img
                        src={firsImg}
                        hidden
                        className="w-[100px] h-[100px]"
                        alt={"Choosen img"}
                      />
                    </div>
                    <div className="w-[46px] h-[46px] rounded-full bg-white flex relative top-[50%] left-[35%] z-20">
                      <span className="w-[16px] h-[2px] bg-black absolute top-[48%] left-[33%]"></span>
                      <span className="w-[2px] h-[16px] bg-black absolute top-[35%] left-[48%]"></span>
                    </div>
                    <span className="w-full h-[50px] bg-gray-600 absolute bottom-0"></span>
                  </label>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="ml-[163px] my-[53px] w-[226px] py-[17px] text-center border-[1px] border-black rounded-lg bg-transparent hover:bg-[#1E90FFCC] hover:border-transparent hover:text-white duration-300"
            >
              {isLoading ? (
                <Spin className="scale-[1.2] bg-transparent" size="large" />
              ) : (
                "Narx baholash"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Price;
