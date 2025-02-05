import * as Popover from '@radix-ui/react-popover'

interface PopoverComponentProps {
  trigger?: React.ReactNode
  content?: React.ReactNode
  className?: string
}

export function PopoverComponent ({ trigger, content, className }: PopoverComponentProps) {
  return (
    <div className={className}>
        <Popover.Root>
        {trigger && (
            <Popover.Trigger asChild>
            {trigger}
            </Popover.Trigger>
        )}
        <Popover.Content className="p-2 mx-4 mt-1 rounded shadow-md bg-background">
            {content}
        </Popover.Content>
        </Popover.Root>
    </div>
  )
}
