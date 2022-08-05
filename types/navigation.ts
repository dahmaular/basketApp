import {NavigatorScreenParams} from '@react-navigation/native';

export type TabNavigatorParamsList = {
  Home: undefined;
  Chat: undefined;
  Card: undefined;
  Contacts: undefined;
  Profile: undefined;
};

export type UnauthenticatedRoutesParamsList = {
  //   CreateAccount: Record<'item', AccountCreationRoute>;
  //   ForgotPassword: undefined;
  //   PhoneNumber: Record<'item', PhoneNumberRoute>;
  //   ProfileType: undefined;
  //   ResetPassword: Record<'item', ResetPasswordRoute>;
  //   Signin: undefined;
  //   Verification: Record<'item', VerificationRoute>;
  //   Welcome: undefined;
  Splash: undefined;
  Welcome: string | undefined;
};

export type AuthenticatedRoutesParamsList = {
  Root: undefined;
  //   Search: undefined | Record<'cardd', SearchRoute>;
  Rolodex: undefined;
  //   SetReminder: undefined;
  //   SetMessage: Record<'item', ScheduleMessagesRoute>;
  //   CreateCard: undefined;
  //   ScheduledMessages: undefined;
  //   ChatMessage: Record<'item', ListChatMessagesRoute>;
  //   ReminderCalendar: Record<'item', ReminderCalenderRoute>;
  //   SearchContact: undefined | Record<'item', Contacts_>;
  //   AddContact: undefined | Record<'item', Contacts_>;
  //   Dashboard: undefined;
  //   PrivacyPolicy: undefined;
  //   Stripe: Record<'url', StripeRoute>;
};

// export interface AccountCreationRoute {
//   id: number | null;
//   title: string;
//   description: string;
//   image: any;
// }

// export interface PhoneNumberRoute {
//   id: number | null;
//   title: string;
//   description: string;
//   image: any;
//   firstName: string;
//   email: string;
//   password: string;
//   userName: string;
//   lastName: string;
// }

// export interface SearchContactRoute {
//   contacts: any;
// }

// export interface Contacts_ {
//   name: string | null;
//   phoneNumber: string;
// }
// [];

// export interface Contacts__ {
//   name: string | null;
//   phoneNumber: string;
// }

// export interface VerificationRoute {
//   email: string;
//   userName: string;
//   isForgotPassword?: boolean;
// }

// export interface ForgotPasswordRoute {
//   userName: string;
// }

// export interface ResetPasswordRoute {
//   code: string;
//   email: string;
// }

// export interface ReminderCalenderRoute {
//   title: string;
//   description: string;
//   startDate: any;
//   endDate: any;
// }

// export interface ListChatMessagesRoute {
//   id: string | null;
//   recipientUserId: string | null;
//   recipientUsername: string | null;
// }

// export interface ListChatMessagesRoute {
//   id: string | null;
//   recipientUserId: string | null;
// }
// export interface ScheduleMessagesRoute {
//   message?: string | null;
//   sender?: string | null;
//   conversationId?: string | null;
//   minute?: string | null;
//   hour?: string | null;
//   day?: string | null;
//   month?: string | null;
//   year?: string | null;
// }
