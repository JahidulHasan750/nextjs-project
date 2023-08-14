const getPredictedAge= async(name:string)=>{
  const res= await fetch(`https://api.agify.io?name=${name}`)
  return res.json()
}
const getPredictedGender= async(name:string)=>{
  const res= await fetch(`https://api.genderize.io?name=${name}`)
  return res.json()
}
const getPredictedCountry= async(name:string)=>{
  const res= await fetch(`https://api.nationalize.io/?name=${name}`)
  return res.json()
}


interface Params{
  params:{name:string};
}
export default async function Page({params}:Params){
  const ageData= getPredictedAge(params.name)
  const genderData= getPredictedGender(params.name)
  const countryData= getPredictedCountry(params.name)


  const [age,gender,country] =await Promise.all([ageData,genderData,countryData])
  return (
    <div className="bg-blue-700 text-center mx-auto my-32 h-80 w-96">
      <div className="text-center   pt-8  gap-8">
        <div className="font-bold text-4xl mb-12">Personal Info</div>
        <div className="font-semibold">Age: {age?.age}</div>
        <div className="font-semibold " >Gender: {gender?.gender}</div>
        <div className="font-semibold " >Country: {country?.country[0]?.country_id}</div>
      </div>
    </div>
  )
}

