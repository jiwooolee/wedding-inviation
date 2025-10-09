import { useEffect } from "react"
import { LazyDiv } from "../lazyDiv"
import { Button } from "../button"
import { useModal } from "../modal"
import { GALLERY_IMAGES } from "../../images"

export const Gallery = () => {
  const { openModal, closeModal } = useModal()

  useEffect(() => {
    // preload images
    GALLERY_IMAGES.forEach((image) => {
      const img = new Image()
      img.src = image
    })
  }, [])

  return (
    <LazyDiv className="card gallery">
      <h2 className="english">Gallery</h2>
      <div className="grid-wrapper">
        <div className="grid">
          {GALLERY_IMAGES.slice(0, 9).map((item, idx) => (
            <div className="grid-item" key={idx}>
              <img src={item} draggable={false} alt={`${idx}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="break" />

      <Button
        onClick={() =>
          openModal({
            className: "all-photo-modal",
            closeOnClickBackground: true,
            header: <div className="title">사진 전체보기</div>,
            content: (
              <>
                <div className="photo-list">
                  {GALLERY_IMAGES.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={`${idx}`}
                      draggable={false}
                    />
                  ))}
                </div>
                <div className="break" />
              </>
            ),
            footer: (
              <Button
                buttonStyle="style2"
                className="bg-light-grey-color text-dark-color"
                onClick={closeModal}
              >
                닫기
              </Button>
            ),
          })
        }
      >
        사진 전체보기
      </Button>
      <style>
        {`
          .grid-wrapper {
            position: relative;
            width: 100%;
            padding-top: 100%; /* 1:1 Aspect Ratio */
          }
          .grid-wrapper::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 50%;
            background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
          }
          .grid {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            gap: 2px;
          }
          .grid-item {
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
          .grid-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .photo-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2px;
          }
        `}
      </style>
    </LazyDiv>
  )
}
