import React, { Fragment, ReactNode } from 'react';
import {
  OverLay,
  Bg,
  Root,
  CloseDiv,
  IconImg,
  ModalHeader,
  TitleArea,
  Title,
  Paragraph,
} from './styles';
import CloseIcon from './icon/close_icon.svg';
import { ReactComponent as CompletedIcon } from './icon/completed.svg';
import { ReactComponent as FailIcon } from './icon/fail.svg';
import { ReactComponent as IssueIcon } from './icon/issue.svg';
import { IconType, ModalSize } from 'types/UIType';

interface IModal {
  open: boolean;
  onCloseModal: (open: boolean) => void;
  size?: ModalSize;
  title: string;
  label?: string; // title 바로 및의 paragraph tag
  children: ReactNode;
  icon?: IconType;
}
/*
[icon]: iconsvg
*/

const Modal = ({
  label,
  title,
  open,
  onCloseModal,
  size,
  children,
  icon,
}: IModal) => {
  // icon type 별로 modal header render
  const iconRender = () => {
    if (icon === 'completed') {
      return (
        <ModalHeader>
          <CompletedIcon className="icon" />
          {/* <img src={CompletedIcon} /> */}
        </ModalHeader>
      );
    }
    if (icon === 'fail') {
      return (
        <ModalHeader>
          <FailIcon className="icon" />
        </ModalHeader>
      );
    }
    if (icon === 'issue') {
      return (
        <ModalHeader>
          <IssueIcon className="icon" />
        </ModalHeader>
      );
    }
    return (
      <ModalHeader>
        <CompletedIcon className="icon" />
      </ModalHeader>
    );
  };

  if (!open) return null;

  return (
    <Fragment>
      <OverLay />
      <Bg>
        <Root size={size} label={label}>
          <CloseDiv>
            <IconImg
              role="button"
              src={CloseIcon}
              alt="close modal"
              onClick={() => onCloseModal(false)}
            />
          </CloseDiv>
          {/* modal header render */}
          {iconRender()}
          <TitleArea>
            <Title>{title}</Title>
          </TitleArea>
          {label && (
            <Paragraph>
              <p>{label}</p>
            </Paragraph>
          )}
          {/* modal content */}
          {children}
        </Root>
      </Bg>
    </Fragment>
  );
};

export default Modal;
