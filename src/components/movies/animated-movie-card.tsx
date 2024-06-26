import { IMAGE_BASE_URL } from '@/lib/constants/tmdb'
import { MovieSearchResponse } from '@/lib/types/search'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { CardBody } from '../ui/card-body'
import { CardContainer } from '../ui/card-container'
import { CardItem } from '../ui/card-item'

const AnimatedMovieCard = ({ movie }: { movie: MovieSearchResponse }) => {
  return (
    <CardContainer className="w-full">
      <CardBody className="w-full">
        <Link
          href={`/movie/${movie.id}`}
          className="w-full flex flex-col items-center justify-center"
          prefetch={false}
        >
          <CardItem>
            <CardItem>
              <div className="w-full h-full flex flex-col items-center justify-center">
                <Image
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  width={200}
                  height={300}
                />
              </div>
            </CardItem>
            <CardItem className="p-4 flex flex-col justify-center items-center">
              <h3 className="w-full text-lg font-semibold truncate overflow-hidden whitespace-nowrap text-ellipsis">
                {movie.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>
                  {movie.vote_average && typeof movie.vote_average === 'number'
                    ? movie.vote_average.toFixed(1)
                    : '0'}
                </span>
                <StarIcon className="w-4 h-4 fill-primary" />
                <span>{new Date(movie.release_date).getFullYear()}</span>
              </div>
            </CardItem>
          </CardItem>
        </Link>
      </CardBody>
    </CardContainer>
  )
}

export default AnimatedMovieCard
