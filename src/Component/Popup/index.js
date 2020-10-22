import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const popup = props => {
  return (
    <div>
      <Dialog
        onClose={props.close}
        aria-labelledby="customized-dialog-title"
        open={props.show}
      >
        <DialogTitle id="customized-dialog-title" onClose={props.close}>
          {"UserData"}
          <IconButton aria-label="close" onClick={props.close}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {props.data.name}
          <br />
          {props.data.password}
          <br />
          {props.data.email}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default popup;
