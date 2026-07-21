"use client";

import { useState } from "react";
import { ChartColumn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { StatsPanel } from "@/components/draw/stats-panel";

export function StatsPanelDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="ghost" size="icon" onClick={() => setOpen(true)} aria-label="Draw statistics">
        <ChartColumn />
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Statistics</DialogTitle>
          </DialogHeader>
          <StatsPanel compact />
        </DialogContent>
      </Dialog>
    </>
  );
}
