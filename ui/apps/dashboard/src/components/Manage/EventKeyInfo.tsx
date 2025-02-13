import { Link } from '@inngest/components/Link/Link';
import { Tooltip, TooltipContent, TooltipTrigger } from '@inngest/components/Tooltip/Tooltip';
import { RiQuestionLine } from '@remixicon/react';

export const EventKeyInfo = () => (
  <Tooltip>
    <TooltipTrigger>
      <RiQuestionLine className="text-subtle h-[18px] w-[18px]" />
    </TooltipTrigger>
    <TooltipContent
      side="right"
      sideOffset={2}
      className="border-muted text-muted text-md mt-6 flex flex-col rounded-lg border p-0"
    >
      <div className="border-b px-4 py-2 ">
        Event keys are unique keys that allow applications to send Inngest events.
      </div>

      <div className="px-4 py-2">
        <Link
          href={'https://www.inngest.com/docs/events/creating-an-event-key'}
          className="text-md"
        >
          Learn more
        </Link>
      </div>
    </TooltipContent>
  </Tooltip>
);
