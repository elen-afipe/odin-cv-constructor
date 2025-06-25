import "./GeneralCV.scss";
import { format } from "date-fns";
import Icon from "@mdi/react";
import { mdiPhone, mdiEmail, mdiMapMarker, mdiCalendar } from "@mdi/js";
export default function GeneralCV({ generalInfo }) {
  return (
    <div className="general-block">
      <img src={generalInfo.imageSrc} alt="" className="profile-pic" />
      <div className="personal">
        <p className="name">
          {generalInfo.name && <span>{generalInfo.name} </span>}
          {generalInfo.surname && (
            <span className="surname">{generalInfo.surname}</span>
          )}
        </p>
        {generalInfo.position && (
          <p className="desired-position">{generalInfo.position}</p>
        )}
      </div>
      <div className="contacts-info">
        <div className="contacts">
          <div className="contact">
            {generalInfo.email && (
              <>
                <Icon path={mdiEmail} size={0.7} />
                <p className="email">{generalInfo.email}</p>
              </>
            )}
          </div>
          <div className="contact">
            {generalInfo.phone && (
              <>
                <Icon path={mdiPhone} size={0.7} />
                <p className="phone">{generalInfo.phone}</p>
              </>
            )}
          </div>
        </div>
        <div className="more">
          <div className="more-item">
            {generalInfo.location && (
              <>
                <Icon path={mdiMapMarker} size={0.7} />
                <p className="location">{generalInfo.location}</p>
              </>
            )}
          </div>
          <div className="more-item">
            {generalInfo.birthday && (
              <>
                <Icon path={mdiCalendar} size={0.7} />
                <p className="birthday">
                  {format(generalInfo.birthday, "dd.MM.yyyy")}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
