### 组件介绍
**“散点图（Scatter Plot）”**控件用于绘制及展示输入数据的热力图。热力图用颜色表示值，值越大代表的颜色越深。
<hr/>

- 输入：
  - data: 数据集
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“散点图（Scatter Plot）”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/model/scatter-plot/param.png)

点击**“查看结果”**按钮，查看数据集详情：  
![visualization-1](/img/aistudio/model/scatter-plot/visualization-1.png)

#### 参数选项
<table>
  <tr>
    <th></th>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>坐标轴</td> 
      <td>
      选择x轴和y轴属性
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>颜色</td> 
      <td>
      根据选择的属性绘制颜色
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>形状</td> 
      <td>
      根据选择的属性设置不同的形状
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>标签</td> 
      <td>
      是否在点上显示所选属性的值
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>显示图例</td> 
      <td>
      在图的上方显示图例
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>显示网格线</td> 
      <td>
      是否绘制网格线
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>鼠标放置时显示所有数据</td> 
      <td>
      鼠标放置到点上后是否显示所有数据信息
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>显示回归线</td> 
      <td>
      绘制回归线
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>选中后显示标签</td> 
      <td>
      圈选区域后显示所选属性的值
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，接着使用**“散点图（Scatter Plot）”**控件绘制散点图。  
![workflow](/img/aistudio/model/scatter-plot/workflow.png)

案例中加载“iris”数据集，运行**“散点图（Scatter Plot）”**后，颜色属性选择【iris】，勾选显示网格线选项。案例中控件的配置以及执行结果如下图所示。
![visualization-2](/img/aistudio/model/scatter-plot/visualization-2.png)