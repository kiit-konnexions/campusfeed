import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='py-32'>
      <div className='overflow-hidden border-b border-muted'>
        <div className='px-6 lg:px-8'>
          <div className='mx-auto flex max-w-5xl flex-col items-center'>
            <div className='z-10 items-center text-center'>
              <h1 className='mb-8 text-pretty text-4xl font-medium lg:text-8xl'>
                Discover campus events
              </h1>
              <p className='mx-auto max-w-screen-md text-muted-foreground lg:text-xl'>
                Explore a world of events at KIIT University. From academic
                lectures and workshops to concerts, sports games, and social
                gatherings, find your passion and connect with the campus
                community.
              </p>
              <div className='mt-12 flex w-full flex-col justify-center gap-2 sm:flex-row'>
                <Button>
                  Get started
                  <ChevronRight className='ml-2 h-4' />
                </Button>
                <Button variant='ghost'>
                  Learn more
                  <ChevronRight className='ml-2 h-4' />
                </Button>
              </div>
            </div>
          </div>
          <Image
            src='/hero.svg'
            alt='placeholder'
            width={1200}
            height={700}
            className='mx-auto mt-24 max-h-[700px] w-full max-w-7xl object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
