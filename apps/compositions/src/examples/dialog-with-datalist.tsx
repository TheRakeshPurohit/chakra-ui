import { Badge, HStack, Textarea } from "@chakra-ui/react"
import { Avatar } from "compositions/ui/avatar"
import { Button } from "compositions/ui/button"
import { DataListItem, DataListRoot } from "compositions/ui/data-list"
import {
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "compositions/ui/dialog"

export const DialogWithDataList = () => {
  return (
    <DialogRoot>
      <DialogBackdrop />
      <DialogTrigger>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Prepare Chakra V3</DialogTitle>
        </DialogHeader>
        <DialogBody pb="8">
          <DataListRoot orientation="horizontal">
            <DataListItem
              label="Status"
              value={<Badge colorPalette="green">Completed</Badge>}
            />
            <DataListItem
              label="Assigned to"
              value={
                <HStack>
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                  Segun Adebayo
                </HStack>
              }
            />
            <DataListItem label="Due date" value="12th August 2024" />
          </DataListRoot>

          <Textarea variant="filled" placeholder="Add a note" mt="8" />
        </DialogBody>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}
