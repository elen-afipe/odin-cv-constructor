// import { useState } from "react";
import Icon from "@mdi/react";
import {
  mdiArrowDownDropCircleOutline,
  mdiArrowUpDropCircleOutline,
} from "@mdi/js";
export default function GeneralInfo({
  generalInfo,
  submitHandler,
  isOpen,
  toggleOpen,
  openNext,
}) {
  // const [isClosed, setIsClosed] = useState(false);
  const btnCollapseLabel = isOpen ? (
    <Icon path={mdiArrowUpDropCircleOutline} size={1} />
  ) : (
    <Icon path={mdiArrowDownDropCircleOutline} size={1} />
  );
  return (
    <div className="form-block">
      <button className="block-title" onClick={toggleOpen}>
        <h2>Personal information</h2>
        <span>{btnCollapseLabel}</span>
      </button>
      {isOpen && (
        <>
          <div className="form-row">
            <label htmlFor="avatar">Photo</label>
            <input
              type="file"
              id="avatar"
              accept="image/*, image/jpeg"
              onChange={(e) =>
                submitHandler({
                  ...generalInfo,
                  imageSrc: URL.createObjectURL(e.target.files[0]),
                })
              }
            />
          </div>
          <div className="form-row">
            <label htmlFor="desPosition">Desired position</label>
            <input
              type="text"
              id="desPosition"
              value={generalInfo?.position}
              onChange={(e) =>
                submitHandler({
                  ...generalInfo,
                  position: e.target.value,
                })
              }
            />
          </div>
          <div className="form-row">
            <div className="half-row">
              <label htmlFor="name">Name</label>
              <input
                autoComplete="true"
                value={generalInfo?.name}
                type="text"
                id="name"
                onChange={(e) =>
                  submitHandler({
                    ...generalInfo,
                    name: e.target.value,
                  })
                }
              />
            </div>
            <div className="half-row">
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                id="surname"
                value={generalInfo?.surname}
                onChange={(e) =>
                  submitHandler({
                    ...generalInfo,
                    surname: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="form-row">
            <div className="half-row">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={generalInfo?.email}
                autoComplete="true"
                onChange={(e) =>
                  submitHandler({
                    ...generalInfo,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="half-row">
              <label htmlFor="phone">Phone number</label>
              <input
                autoComplete="true"
                type="tel"
                id="phone"
                value={generalInfo?.phone}
                onChange={(e) =>
                  submitHandler({
                    ...generalInfo,
                    phone: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="form-row">
            <div className="half-row">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                value={generalInfo?.location}
                onChange={(e) =>
                  submitHandler({
                    ...generalInfo,
                    location: e.target.value,
                  })
                }
              />
            </div>
            <div className="half-row">
              <label htmlFor="birthday">Birthday</label>
              <input
                type="date"
                id="birthday"
                value={generalInfo?.birthday}
                onChange={(e) =>
                  submitHandler({
                    ...generalInfo,
                    birthday: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <button onClick={openNext} className="next btn">
            Next
          </button>
          {/* <button onClick={editHandler}>Edit</button> */}
        </>
      )}
    </div>
  );
}
