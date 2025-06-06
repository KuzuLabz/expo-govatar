export enum Gender {
    MALE = 0,
    FEMALE
}

export type GenderType = keyof typeof Gender;
export type GenerateAvatarProps = {
    username?: string;
    gender?: GenderType;
};