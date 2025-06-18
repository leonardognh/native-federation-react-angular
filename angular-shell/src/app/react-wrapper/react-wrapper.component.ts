import { loadRemoteModule } from '@angular-architects/native-federation';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-react-wrapper',
  imports: [],
  templateUrl: './react-wrapper.component.html',
  styleUrl: './react-wrapper.component.scss',
})
export class ReactWrapperComponent implements AfterViewInit {
  async ngAfterViewInit() {
    console.log('React container is ready');
    await loadRemoteModule({
      remoteName: 'mfe1',
      exposedModule: './component',
    });
  }
}
