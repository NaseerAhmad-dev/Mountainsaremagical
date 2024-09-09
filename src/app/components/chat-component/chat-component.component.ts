import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-component',
  standalone: true,
  imports: [],
  templateUrl: './chat-component.component.html',
  styleUrl: './chat-component.component.scss'
})
export class ChatComponentComponent {
  chatIconUrl = 'https://www.logo.wine/a/logo/WhatsApp/WhatsApp-Logo.wine.svg';

  openWhatsapp = () => {
    const Message = "I want to book a travel package";
    window.open(`https://wa.me/+918491015362?text=${Message}`, "_blank");
  };
}
