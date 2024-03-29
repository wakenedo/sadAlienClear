import React from 'react'


const DefaultSectionTextAndImage = () => {
  return (
    <div >
      <div className=" h-full content mx-auto max-w-7xl py-4 px-2 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-4 lg:px-4 xl:mb-8 ">
        <div className="md:flex-col ">
          <div className="md:flex">
            <div className="md:w-2/4 p-4 h-full xl:mt-5 mt-2 ml-[41rem] text-justify bg-[#6590FF] rounded-b-lg z-10 hover:z-20">
              <div className="border-b border-slate-100 mb-5">
                <h2 className="text-3xl mb-2 font-semibold tracking-tight text-slate-100 uppercase ">Default Image and text</h2>
              </div>
              <span className="font-light tracking-wide text-slate-100 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus sed leo vitae erat laoreet molestie.
                Morbi interdum suscipit elit non fermentum.
                Nunc nec massa ultrices, ultricies nulla at, euismod nulla.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus sed leo vitae erat laoreet molestie.
                Morbi interdum suscipit elit non fermentum.
                Nunc nec massa ultrices, ultricies nulla at, euismod nulla.
                Pellentesque maximus magna pretium neque pellentesque finibus.
                Donec posuere tincidunt elit, eget fringilla dui laoreet id.
                Aenean molestie porta ipsum, sed tincidunt tortor porta ac.
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Curabitur eros ex, iaculis non purus in, elementum ultricies turpis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus sed leo vitae erat laoreet molestie.
                <br />
                Morbi interdum suscipit elit non fermentum.
                Nunc nec massa ultrices, ultricies nulla at, euismod nulla.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus sed leo vitae erat laoreet molestie.
                Morbi interdum suscipit elit non fermentum.
                Nunc nec massa ultrices, ultricies nulla at, euismod nulla.
                Pellentesque maximus magna pretium neque pellentesque finibus.
                Donec posuere tincidunt elit, eget fringilla dui laoreet id.
                Aenean molestie porta ipsum, sed tincidunt tortor porta ac.
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Curabitur eros ex, iaculis non purus in, elementum ultricies turpis.
                Aenean molestie porta ipsum, sed tincidunt tortor porta ac.
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Curabitur eros ex, iaculis non purus in, elementum ultricies turpis.
              </span>
            </div>
            <div className="absolute lg:w-[655px] h-[680px] cursor-pointer   z-0 hover:z-20 ">
              <div className="lg:w-[1100px] h-[680px]  ">
                <img alt="" className="w-full h-full shadow-sm min-h-48   aspect-square" src="https://i.ibb.co/1fWrvS9/espa-o.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default DefaultSectionTextAndImage