import Image from 'next/image';
import React from 'react';

const Advertise = () => {
    return (
        <div>
            <div className='container mx-auto mt-5 px-4 lg:px-20'>
             <div className="w-full">
                       {/* Image for larger devices */}
                       <Image
                         src="https://i.ibb.co.com/QQhhrr5/Group-16859.png"
                         alt="Section Background"
                         width={1920}
                         height={121}
                         className="hidden lg:block w-full h-auto" // Hidden on small screens, shown on lg and above
                       />
                       
                       {/* Image for smaller devices */}
                       <Image
                         src="https://i.ibb.co.com/vht4qWB/Group-16961.png"
                         alt="Section Background for small screens"
                         width={1920}
                         height={121}
                         className="lg:hidden w-full h-auto px-6" // Shown only on small screens
                       />
                     </div>
            </div>
        </div>
    );
};

export default Advertise;