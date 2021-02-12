import { Resolver, Query, Mutation, Arg, InputType, Field } from 'type-graphql';
import Video from './Video';
import VideoSchema from '../../model/VideoSchema';

@InputType()
class VideoInput{
  @Field()
  description: string;

  @Field()
  name: string;

  @Field()
  category: string;
}

@Resolver(Video)
class VideoResolver {
  
  @Query(() => [Video])
  async videos(){ 
    const videos = await VideoSchema.find({}, 'name description  category')
    return videos
  }
  
  @Mutation(() => Video)
  async createVideo(@Arg("videoInput") videoInput: VideoInput ){
     const video = await VideoSchema.create(videoInput)
     return video
  }
};
 export default VideoResolver;
