import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface PartnershipFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PartnershipForm = ({ open, onOpenChange }: PartnershipFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/amenityforge@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          "School Name": formData.get("schoolName"),
          address: formData.get("address"),
          "Student Count": formData.get("studentCount"),
          message: formData.get("message"),
          _subject: "New Partnership Application - IAETDS",
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Application Submitted Successfully!",
          description: "Thank you! We will contact you soon regarding your partnership application.",
        });
        form.reset();
        onOpenChange(false);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was an error submitting your application. Please try again or contact us directly.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto gold-border bg-card">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-foreground">
            Apply for Institutional Partnership
          </DialogTitle>
          <DialogDescription className="font-sans text-muted-foreground">
            Fill out the form below to apply for the ₹10,000 Annual Partnership. Our team will review your application and get back to you soon.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 mt-6"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="schoolName" className="font-sans text-sm font-medium">
                School/Institution Name <span className="text-gold">*</span>
              </Label>
              <Input
                id="schoolName"
                name="schoolName"
                type="text"
                required
                placeholder="Enter your institution name"
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name" className="font-sans text-sm font-medium">
                Contact Person Name <span className="text-gold">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your full name"
                className="bg-background"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-sans text-sm font-medium">
                Email Address <span className="text-gold">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your.email@example.com"
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="font-sans text-sm font-medium">
                Phone Number <span className="text-gold">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+91 1234567890"
                className="bg-background"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="font-sans text-sm font-medium">
              Institution Address <span className="text-gold">*</span>
            </Label>
            <Textarea
              id="address"
              name="address"
              required
              placeholder="Enter complete address"
              rows={3}
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="studentCount" className="font-sans text-sm font-medium">
              Approximate Number of Students
            </Label>
            <Input
              id="studentCount"
              name="studentCount"
              type="number"
              placeholder="e.g., 500"
              min="1"
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-sans text-sm font-medium">
              Additional Information
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your institution and why you're interested in this partnership..."
              rows={5}
              className="bg-background"
            />
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="font-sans"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="font-sans bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PartnershipForm;
