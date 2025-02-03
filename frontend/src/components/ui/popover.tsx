import * as Popover from '@radix-ui/react-popover';

interface PopoverComponentProps {
  trigger?: React.ReactNode;
  content?: React.ReactNode;
  className?: string
}

export function PopoverComponent({ trigger, content, className }: PopoverComponentProps) {
  return (
    <div className={className}>
        <Popover.Root>
        {trigger && (
            <Popover.Trigger asChild>
            {trigger}
            </Popover.Trigger>
        )}
        <Popover.Content className="mt-1 p-2 mx-4 bg-background rounded shadow-md">
            {content}
        </Popover.Content>
        </Popover.Root>
    </div>
  );
}
