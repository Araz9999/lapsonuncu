export type CallStatus = 'incoming' | 'outgoing' | 'active' | 'ended' | 'missed' | 'declined';
export type CallType = 'voice' | 'video';

export interface Call {
  id: string;
  callerId: string;
  receiverId: string;
  listingId: string;
  type: CallType;
  status: CallStatus;
  startTime: string;
  endTime?: string;
  duration?: number; // in seconds
  isRead: boolean;
}

export interface ActiveCall {
  id: string;
  callerId: string;
  receiverId: string;
  listingId: string;
  type: CallType;
  startTime: string;
  isMuted: boolean;
  isSpeakerOn: boolean;
  isVideoEnabled: boolean;
}