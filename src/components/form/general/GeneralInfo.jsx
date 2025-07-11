import { useState } from "react";
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
  const [isEditable, setIsEditable] = useState(true);
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
              disabled={isEditable ? false : true}
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
              disabled={isEditable ? false : true}
              type="text"
              id="desPosition"
              value={generalInfo?.position}
              maxLength={100}
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
                disabled={isEditable ? false : true}
                autoComplete="true"
                value={generalInfo?.name}
                type="text"
                id="name"
                maxLength={30}
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
                disabled={isEditable ? false : true}
                type="text"
                id="surname"
                maxLength={30}
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
                disabled={isEditable ? false : true}
                type="email"
                id="email"
                value={generalInfo?.email}
                autoComplete="true"
                minLength={6}
                maxLength={30}
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
                disabled={isEditable ? false : true}
                autoComplete="true"
                type="tel"
                id="phone"
                value={generalInfo?.phone}
                minLength={8}
                maxLength={15}
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
                disabled={isEditable ? false : true}
                type="text"
                id="location"
                value={generalInfo?.location}
                maxLength={25}
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
                disabled={isEditable ? false : true}
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
          <div className="buttons">
            <button className="edit btn" onClick={() => setIsEditable(true)}>
              Edit
            </button>
            <button
              onClick={() => {
                setIsEditable();
                openNext();
              }}
              className="next btn"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
