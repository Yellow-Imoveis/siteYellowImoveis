import { useQuery } from "react-query";
import { getSuperHighlight } from "../../providers/property";
import Loading from "../Loading";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const SuperHighlight = () => {

  const [videoId, setVideoId] = useState(null);
  const [isOpen, setOpen] = useState(false);

  const { data, isLoading, error } = useQuery('super-highlight', async () => {
    const result = await getSuperHighlight();

    if (result?.youtube_video) {
      setVideoId(result.youtube_video.split('v=')[1]);
    }

    return result;
  });

  return (
    <>
      <div className="container lg:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-2 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Super destaque</h3>

          {isLoading && (
            <Loading />
          )}

          {error && (
            <p className="text-center">Ocorreu um erro ao carregar os dados</p>
          )}

          {data && (
            <>
              <p className="text-slate-700 max-w-xl mx-auto mb-4">
                {data.title}
              </p>
              <div className="rounded-lg relative">
                <img 
                  src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`} 
                  alt={data.title} 
                  className="rounded-lg shadow-sm object-cover w-full"
                  style={{ height: '490px' }}
                />

                {/* put a play button in the middle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <button onClick={() => setOpen(true)} className="bg-red-600 border-2 border-red-600 rounded-lg h-16 w-24 flex items-center justify-center">
                    <i className="mdi mdi-play text-white text-4xl"></i>
                  </button>
                </div>
              </div>
              {/* <div>{JSON.stringify(data)}</div> */}
            </>
          )}
        </div>
      </div>

      {/* modal */}
      <ModalVideo
        isOpen={isOpen}
        autoplay={true}
        controls={false}
        channel="youtube"
        videoId={videoId}
        onClose={() => setOpen(false)}
        width={1200}
      />
    </>
  );
}

export default SuperHighlight;