import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

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
