"use client"

import { Calendar, LogOutIcon, UserCircle } from "lucide-react"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"

import { Avatar, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import SignInDialog from "./sign-in-dialog"

export function Navbar() {
  const { data } = useSession()
  const handleLogoutClick = () => signOut()

  return (
    <div className="hidden items-center gap-6 lg:flex">
      <Button className="justify-start gap-2" variant="ghost" asChild>
        <Link href="/bookings">
          <Calendar size={18} />
          Agendamentos
        </Link>
      </Button>

      {!data?.user ? (
        <Dialog>
          <DialogTrigger asChild>
            <Button className="justify-start gap-2" variant="default">
              <UserCircle size={18} />
              Perfil
            </Button>
          </DialogTrigger>

          <DialogContent className="w-[90%] rounded-lg">
            <SignInDialog />
          </DialogContent>
        </Dialog>
      ) : (
        <div className="flex items-center gap-2">
          <Avatar className="h-[36px] w-[36px]">
            <AvatarImage
              src={data.user.image ? data.user.image : "/avatar.jpg"}
            />
          </Avatar>

          <div>
            <p className="font-bold">{data.user.name}</p>
          </div>

          <div className="gap-4">
            <Button
              variant="outline"
              className="gap-2"
              onClick={handleLogoutClick}
            >
              <LogOutIcon size={18} />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
