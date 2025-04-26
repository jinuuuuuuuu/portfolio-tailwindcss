// Home Section
import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';

const avatar = createAvatar(adventurer, {
  seed: 'Mason',
});

const svg = avatar.toString();

const SectionIntro = () => {
  return (
    <section
      id="home"
      className="scroll-mt-20 flex flex-col md:flex-row justify-between items-center mb-12"
    >
      <div className="shrink-0 mb-6 md:mb-0 md:mr-10">
        <div
          dangerouslySetInnerHTML={{ __html: svg }}
          className="w-56 h-56 rounded-full  border-2 overflow-hidden"
        />
      </div>
      <div className="text-center md:text-right">
        <h1 className="text-4xl font-bold mb-2">Jinwoo Kim</h1>
        <p className="text-xl mb-4">Frontend Developer</p>
        <p className="text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
          provident odit delectus nisi ipsum quasi a odio eos error nihil,
          facere, reiciendis totam architecto. Eveniet molestias nemo sequi
          suscipit doloremque!
        </p>
      </div>
    </section>
  );
};

export default SectionIntro;
