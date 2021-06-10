import React from 'react';
import {
  UserInformationContainer,
  UserName,
  AvatarStyled,
  RatingStyled,
  UserDescription,
} from './UserInformation.styles';

interface UserInformationProps {
  picture?: string;
  name: string;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = ({
  picture,
  name,
  rating,
  description,
}) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  );
};

export default UserInformation;
