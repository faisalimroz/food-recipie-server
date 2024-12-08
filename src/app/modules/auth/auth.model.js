import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    displayName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    photoURL: {
      type: String,
      required: true,
    },
    coins: {
      type: Number,
      default: 50,
    },
    role: {
      type: String,
      enum: ['User', 'Admin'],  
      default: 'User',          
    },
  },
  {
    timestamps: true,
  }
);

export const User = model('User', UserSchema);
