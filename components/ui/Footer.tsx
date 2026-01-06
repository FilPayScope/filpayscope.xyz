import { RiGithubFill, RiEarthFill } from "@remixicon/react";

const Footer = () => {
  return (
    <div className="md:hidden py-16 px-4 xl:px-0">
      <footer id="footer" className="relative mx-auto flex  flex-wrap pt-4">
        <div className="mx-auto flex w-full justify-center lg:w-fit lg:flex-col">
          <div>
            <div className="mt-4 flex items-center justify-center">
              {/* Social Icons */}

              <a
                href="https://github.com/filpayscope"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-700 dark:text-gray-300 transition-colors duration-200 hover:text-[#0090ff"
              >
                <RiGithubFill className="size-6" />
              </a>
              <a
                href="https://www.ivanmolto.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-700 dark:text-gray-300 transition-colors duration-200 hover:text-[#0090ff"
              >
                <RiEarthFill className="size-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
