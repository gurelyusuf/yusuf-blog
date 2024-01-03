import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '@/icons';
import React from 'react';

const SocialMedia = () => {
  return (
    <div className="flex gap-8">
      <a href="https://github.com/gurelyusuf" target="_blank">
        <GithubIcon />
      </a>
      <a href="https://twitter.com/itisgurel" target="_blank">
        <TwitterIcon />
      </a>
      <a href="linkedin.com/in/gurelyusuf/" target="_blank">
        <LinkedinIcon />
      </a>
    </div>
  );
};

export default SocialMedia;
