import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {


  const [data, setData] = useState([{
    name:"Niosh",
    occuption:"Sound Engineer, Mumbai",
    quote:"When you dont have mobile read manga",
    src:"https://dub.sh/NnQwl59"
  }])


const info = [
  {name: "Samuel", occuption: "Software Engineer, Goa", quote: 'Chipi Chipi Chapa Chapa Dubi Dubi Daba Daba', src: "https://lh3.googleusercontent.com/pw/ABLVV84F-WCznKc4GdzICZtgEFjyFnS95YfXoRuOigys7k_pzwKtdjZDM1DlucBJnc01tXvEiZDZI-iIVsG_nvoDfmOewXGxCPET4_zFjokJvke0f1L49TUcaa_eQ1c57ddHLl77YVSgTlUzblpBGa4ueQ7Ll6-MTqbfkvNahDMA-1N_HJDvpHBPlXxTn6T4b2NCVd-jN4zbiQWXWizOX_YKlUy8jKFtA3Sa5YgDzxs64unfvR7b7nooJqcbjDNTaK0RB64UcGs_8tA5ZZFhKLLxHw8rP2FPS1OEuCmGJLo8yvmhuWYgJVhvnuWqwGq2yiB8eIxISJlG32A4SZB4n7ABfWu2hxhdgSuyKpTumvCNX1aQzW7PU0lap8QObHPZ3FxzpAqjOLfnV19nqaW58-o1Kz0BlZLsAl_mXkuUSnmhdyeHRIGg54N4wWo0Mc914Pw1zQ6PAWrnKtxMt3Lu4QVugB2lXUM2GLH63G_h61coRHmKiRfmhlqP_LTsHyolaAVpvZXYtIrwkEdaF4MJGvs7RoR_zkqJ9aTf-Y3fKRcE6x2w-uj4tIMVQm0TS-FtIjS-4J7_lwH3hK5YQvPuaul8AnLrMOzZUr5CxNmOe-TFMqE4jrk8r9Qk34cLOcjKjLEYuETNUuqjYuE4UiiZwFiRwJg4cIbxcIlLyNFoQxUXooKi2Sl7sWRygyERMgIs2LMIdDWwhPTkLJA9rushYuLFIlVjQe3LRKS8DMunIxNLxabMZgRHMacfRi9GyKpeQAMHk0xXpdseKbuaiepT6fmraZ0YWSi3fARrdIWybHLhlXgucDar_b2IvY7fYpJ997rFX9jXLHoVnmvxc3dh52baJA0Vsz_PFtGzEpoUkFQ7g8SsKVVr6nID2-qJzEhHg9riNQ=w547-h670-s-no-gm?authuser=0"},
{name: "Niosh", occuption: "Sound Engineer, Mumbai", quote: "When you dont have mobile read manga", src:"https://dub.sh/NnQwl59"},
{name: "Noah", occuption: "Artist, Goa", quote: "Life is sad but be happy", src:"https://lh3.googleusercontent.com/pw/ABLVV853pdmMvOJrzl_QxkWPrRxkc1jbW0Mq1cSWcPSJaj_aarNwVtFKnKTiPGgX-T8TVRgQ6kLa6NpwJ5Y7ENz6a-v_lSMnTUFQMeycYii_Kn20gGvrzUBoSdPihaxZq-f6WxdM4MRicwyVmKgWmf49EVQuw_xlbFayHRlvl_QOGR14BzJLeBvyhg4TJkOdEx9kgRQCNC094Zco6WAf4FhNoCS4293lAgBOJ8vYYe4ROcu3VR_zFlTM_1boedWvvgrrP-7BXmNmLbFmVTKs2ZIbL0WUJ_yprUcmj17kyHD5R7WjYZf0HOnp7prbMcapvwDgdiczPf-IemZ434aeAgnanYew6QGCASp1H8vQojwl3-IECu6R5K9VdC0r2K61Wm2q7rG17gU8LgEBXEgcMEWQDRUnL1hPWaeZXdHInb_lJz2YH2KTfsiwxGRa4k9Z5la9UZsG4SfzIdnUO38mo6-M2Yuktm5oF9wnYCg4gPOQwDPxFXI5NpHWyoxzLe9vGF0g2ZLjFp--UXyBIa0VDu7zn6nbu7SMMEYrcdY5LU8Ynio4o4cMNy2lDa9YlHoXZKyh07QC8Vr_yEOT2wH4wO4bQyKepPWNmjmsQIZhNisMznCptNtY0rgXMep7a5JW1ByCsHuLQEcZdb7DPSQNhgPQ87DzcedXN2lHVTQk4m9lQACFZvVO8WaPzopV7EPnZgu18UlOvvj5CpAJR42gXnrcOfaPcsMxBbI-Akngq9kaYF6Zm_UEWSgot3GB66Z6JFU5RGcmG1VcDu7FddhafC41Q-0kdNx4jrnZUpmb1gMK55K2yT-7JftebMGwinIDnQf2RMPtKiuuL5WsPTkEsUkxmsywKaoCtMGSJR_PPdE6CoYJN0yw7692yuH9w2hsjURUnQ=w775-h646-s-no-gm?authuser=0"},
{name: "Sumit", occuption:"Philosopher, Goa", quote:"Life can only be understood backwards; but it must be lived forwards.", src:"https://lh3.googleusercontent.com/pw/ABLVV84PFPdz4lFRoOpQWosTZMofMJIoxKI9AI8aWZ35SX11PofMYyH2D4aSwDF5O0heIN8heNWCTlRFiI3vszfKBoMdddGuLPkI8X4hNbgvyHQig2iHTuZAC0_9jhYSCirmP28G_Gx637nzfk2au4G7nrtb7vfqDBEsI0MEFpmzQB1nJx_9vixNeZfu3hRce31OhyP3zhDml4CqYO0kce3m0-dOHjzMpKalAUKS9EGBhqePCuUmiYvvNDdLpeXzRvw9OjQNXJpo1hSYyCqdi1IBmiQ3FlZjT_xspgSI9z9P6zj5y8VTGR7MhqCa0P5Z1Q6FV9iCiceWbnspELKLYpOVXK00oF3fEEaDUcJhnqtFKUQmAKL4lBQwry0qdkwSfa5h3d4ywNk0kgWP6Z2iy83qzMoXdbCX7upDkSq6MCjJe342gc7d32FIiwD3pENqttljRlgheCcGHe4juqxIvzQc8C1PoFEhiC3x0pxGrV-QCO2KSO2NN0_k_1SkXm3qmiSRXYpUvCfI0MBqjRl1a5EdvU0EWV78kQfVgnMekY_bNaWoGGzcx1yCWj-DQPG0MMHYMBc3BGqUPbcD7ttKfuol98pX25gPD-Z8cyJMsQBJ7SoVD95sZO7-CaKRtg5FcRi_wvmfp9J1BX-gLmSDdDysosYQeq2Mfji6bIZHtq3HrB1NHSrrta-IfBQmEgTg4bcqrKk5Kp05ewwvQmVtkOAu6kkDY3fEu1jP9ZJsePdLdOuQ16-pmZAENzKM4GtrgMfDeQoNeq5HfltdZ2diSjADHwkhsBbJtp-8AA2pfPyxf983YRAENmFsBNva6nWco82JUCRFBYgBMcTEARWriap5AZ9KnVxbRLtEAeCa8evjj4-hLJeIKgSat4sFp4YT23NmMg=w214-h346-s-no-gm?authuser=0"},

{name: "Gauresh",occuption:"Badminton Player, Goa", quote: "Mai bhul gaya" ,src:"https://lh3.googleusercontent.com/pw/ABLVV87A9rSuXjQjOIMq0YuLcC0H6GLrOc285-t2Q8LFqEcX7872-WKRCeLJ4pJZGVwqLRfZcVUjSG0rUWz_EeLr___ggYv9hH3jmGwwjVcc306W0iz1rbPSTmIHvM5Z_83WdHzXNpGNYrh0M5LuhjqLZSYcc3Js_bWBfG5nQ0cQBDnHGc7Xor_A4vfU1810zzzTKlmnRdH6BO-_jaOVQhpMdTkefoz9kOBxJb0Nw4NFMd48oxVg3Gcgn6kKC9bx7SYgdAyRWtMCR71FpTH9UMVWdO1PQ_4U8Qh30FTDTqS9pQuJIZDM3LF1qhDdK8CLctfC5cWuLtnNBTM1YBRrm4814dCm3S4CoI8Zxkae4n2BTa0Jc55UVqznJomfu9-xeTCAP3IzjZpo7_F1dxM5ure3flUjz1w9FK0TLxFVHM_1PqOsYcQh-xQCXSpEGiUQLhrMIOb8-C8zab5mHIVWdmTI2XOh_FU5rudKu992sfLyrYMk7rfsGRkyeXFSq7Hw6WR_8YmfUbY-ar9HG9_yPR3EofuzS25zp7wKHcrBtPAST_MyAYcCsK3SLWVDa3z4U4rFSJ2ukvaUTfIsXqPF6p8hLMgyAkmBCj6id-eI1c3HFe3eOHOEfOr8Y6U-NHzuE7OUSskXcwVlKXncHb563eO02NabVmu62me5MHKvcplIsKdv_ypRV-8puNmmIrV7PKQ-IQ4N4VvUJgol697gAT_6z3AzCcehT21jJjOjR4nEHsLb7JfulpFrYw9KLyv77Vh0HkaJLFTmnesdHE9CBDJuLMi1-UnqHCrqEVJ6vtIGqAVnW6yIhsfhtwd6lkxNcjUahd-kknCUUynXdOt0LzRgGFhMuPrByOf7RsnnnC1McIkXlXXXuybzFo58EGz2rxrsXg=w468-h233-s-no-gm?authuser=0"}

];

  return (
    <>
    <div className="flex flex-col gap-4">
    <Card name={data[0].name} occuption={data[0].occuption} quote={data[0].quote} src={data[0].src}/>   

    <div className='flex gap-4'>

    {info.map((key)=>(
    <button key={key.name} 
    onClick={()=>{
      setData([{name: key.name, occuption: key.occuption, src: key.src, quote: key.quote}])
    }}
    
    >
      <img src={key.src} width={120} alt="" />
    </button>
   ))}
  
    </div>
    </div>


   
    </>
  )
}

export default App
