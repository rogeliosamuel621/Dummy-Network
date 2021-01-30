import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

<<<<<<< HEAD
export type UserDocument = User & mongoose.Document;

=======
<<<<<<< HEAD
export type UserDocument = User & mongoose.Document;

=======
>>>>>>> bcaa6ca82c8fe33b84ae98edac0135861a1086eb
>>>>>>> fd2635efdbf554ec9470147403002ce85735883f
@Schema()
export class User {
	@Prop({ required: true, maxlength: 33 })
	username: string;

	@Prop({ required: true, unique: true })
	email: string;

	@Prop({ required: true, minlength: 6 })
	password: string;

	@Prop({ required: false, default: '' })
	profilePic: string;

	@Prop({ required: false, default: '' })
	bio: string;

	@Prop({ required: false, default: [] })
	posts: any[];

	@Prop({ required: false, default: [] })
	followers: mongoose.Schema.Types.ObjectId[];

	@Prop({ required: false, default: [] })
	following: mongoose.Schema.Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
