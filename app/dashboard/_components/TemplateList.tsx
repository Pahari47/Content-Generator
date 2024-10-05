import { useState } from 'react';

export default function TemplateList() {

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    'https://th.bing.com/th/id/OIP.dWh-9WCGSoj6Dkubv0awRAAAAA?w=232&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://th.bing.com/th?id=OIP.laz6w-yVUIaeFQuuyycf2wHaEc&w=322&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    'https://th.bing.com/th?id=OIP.NzsiYnN2FqJGj-9g2iRaCgHaDr&w=350&h=173&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
  ];

  return (
    <div className="flex flex-col mt-5 items-center justify-center h-full">
      <div className="flex w-4/5 justify-between mb-8">
        <div className="w-1/2 h-52 bg-gray-200 flex items-center justify-center border">
          <h2 className="text-lg">Krishnendu bkl</h2>
        </div>

        <div className="w-1/2 h-52 bg-gray-100 flex items-center justify-center border">
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-full" />
          ) : (
            <h2 className="text-lg">Click here budy</h2>
          )}
        </div>
      </div>

      <div className="flex w-4/5 justify-between">
        {images.map((imgSrc, index) => (
          <div
            key={index}
            className="w-1/3 h-28 cursor-pointer border flex items-center justify-center"
            onClick={() => setSelectedImage(imgSrc)}
          >
            <img src={imgSrc} alt={`Thumbnail ${index}`} className="max-w-full max-h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
