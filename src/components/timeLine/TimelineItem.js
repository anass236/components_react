import React from "react";
import AdjustIcon from "@material-ui/icons/Adjust";
import IconCategory from "./IconCategory";
import DoneIcon from "@material-ui/icons/Done";
import { IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import ArchiveIcon from "@material-ui/icons/Archive";
/**
 * @usage
 * <TimelineItem time={time} text={text} />
 */

function TimelineItem({
  name_med,
  date_of_stock,
  type_med,
  to_stock,
  category,
}) {
  return (
    <div className="timeline-item">
      <div className="timeline-badge timeline-img">
        <img
          src={require("../../assets/images/pentagon.png")}
          alt="Pentagon"
          title="Pentagon"
        />
      </div>

      <div className="timeline-panel padding-0">
        <div className="box-header">
          <div className="timeline-title">
            <AdjustIcon className="timeline-icon" />
            Pour Stocker
          </div>
          <div className="">
            <div className="d-flex">
              <div>
                <h5 className="timeline-text">{name_med}</h5>
                <p className="timeline-text-type">{type_med}</p>
              </div>
              <div className="ml-auto">
                <h5 className="timeline-number">{to_stock}</h5>
              </div>
            </div>
          </div>
          <div className="d-flex ">
            <div className="mr-auto align-self-start timeline-element__svg ">
              <IconCategory name={category} />
            </div>

            <div className="justify-content-center align-items-center">
              <IconButton>
                <ArchiveIcon style={{ color: "#d6af6b", fontSize: 40 }} />
              </IconButton>
              <IconButton>
                <ClearIcon style={{ color: "#ed325a", fontSize: 40 }} />
              </IconButton>
              <IconButton>
                <DoneIcon style={{ color: "#00c1ae", fontSize: 40 }} />
              </IconButton>
            </div>
            <div className="ml-auto align-self-center">
              <div className="card-date">{date_of_stock}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;
