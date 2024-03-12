
import { useModal } from "@/hooks/useModalStore";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";

const membersData = [
    { id: 1, name: "Aryan", email: "aryan@example.com", role: "Admin", joinDate: "2022-01-01" },
    { id: 2, name: "Vishal", email: "viz@example.com", role: "Member", joinDate: "2022-02-15" },
    { id: 2, name: "Rehan", email: "ray@example.com", role: "Member", joinDate: "2022-02-15" }

    // Add more members with additional details as needed
  ];
  
  export const MemberModal = () => {
    const { isOpen, onClose, type } = useModal(); // Assuming you pass the community data to the modal
    // reference for later  : { isOpen, onClose, type ,data}
  
    const isModalOpen = isOpen && type === 'members';
  
    return (
      <>
        <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
          <DialogContent className="bg-white text-black p-0 overflow-hidden">
            <DialogHeader className="pt-8 px-6">
              <DialogTitle className="text-2xl text-center font-bold">
                Community Members
              </DialogTitle>
            </DialogHeader>
            <div className="p-6">
              <ul className="space-y-4">
                {membersData.map((member) => (
                  <li key={member.id}>
                    <p className="text-gray-700">
                      <strong>Name:</strong> {member.name}
                    </p>
                    <p className="text-gray-700">
                      <strong>Email:</strong> {member.email}
                    </p>
                    <p className="text-gray-700">
                      <strong>Role:</strong> {member.role}
                    </p>
                    <p className="text-gray-700">
                      <strong>Joined on:</strong> {new Date(member.joinDate).toLocaleDateString()}
                    </p>
                    {/* Add more member details as needed */}
                  </li>
                ))}
              </ul>
            </div>
            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button onClick={() => onClose()}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  };
  
  