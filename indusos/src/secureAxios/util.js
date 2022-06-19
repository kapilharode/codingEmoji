import { emojiMap } from "../component/constant";
import secureAxios from "./secureAxios";

export const fetchData = async () => {
  try {
    const response = await secureAxios.get("text-details/");
    return response.data || [];
  } catch (error) {
    return 0;
  }
};

export const addNewData = async (textData) => {
  try {
    const formData = new FormData();
    formData.append("textData", JSON.stringify(textData));
    const response = await secureAxios.post("text-details/", formData);
    return response;
  } catch (error) {
    return 0;
  }
};

export const dataEmoji=(data)=>{
var replaceData=data
var re = new RegExp(Object.keys(emojiMap).join("|"),"gi");
replaceData = replaceData.replace(re, function(matched){
 return emojiMap[matched]
}); 
return replaceData

} 